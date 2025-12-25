import type { CanvasStar, NebulaCloud } from '@/types/config-types';
import {
  STAR_CONFIG,
  NEBULA_CONFIG,
} from '@/constants/config/animation-config';

/**
 * Sprite cache entry containing pre-rendered canvas element.
 */
type SpriteCache = {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
};

/**
 * Pre-render star and nebula sprites to offscreen canvases for massive performance gains.
 * Instead of drawing 2000 radial gradients per frame, we draw pre-rendered images.
 */
export class SpriteRenderer {
  private starSprites: Map<string, SpriteCache> = new Map();
  private nebulaSprites: Map<number, SpriteCache> = new Map();

  /**
   * Pre-render all unique star variations during initialization.
   * Creates sprites for each size/color combination.
   */
  preRenderStars(): void {
    const layers = ['background', 'middle', 'foreground'] as const;

    layers.forEach((layer) => {
      const sizeConfig = STAR_CONFIG.SIZE_BY_LAYER[layer];
      const colors = STAR_CONFIG.COLORS_BY_LAYER[layer];

      // Create 5 size variations per layer
      const sizeSteps = 5;
      for (let i = 0; i < sizeSteps; i++) {
        const size =
          sizeConfig.MIN +
          (i / (sizeSteps - 1)) * (sizeConfig.MAX - sizeConfig.MIN);

        colors.forEach((color) => {
          const key = this.getStarSpriteKey(size, color);
          if (!this.starSprites.has(key)) {
            this.starSprites.set(key, this.createStarSprite(size, color));
          }
        });
      }
    });
  }

  /**
   * Pre-render all nebula sprites during initialization.
   */
  preRenderNebulae(nebulae: NebulaCloud[]): void {
    nebulae.forEach((nebula) => {
      if (!this.nebulaSprites.has(nebula.id)) {
        this.nebulaSprites.set(nebula.id, this.createNebulaSprite(nebula));
      }
    });
  }

  /**
   * Create a pre-rendered star sprite with radial gradient.
   */
  private createStarSprite(size: number, color: string): SpriteCache {
    const padding = 2; // Extra padding for glow
    const canvasSize = Math.ceil(size * 2) + padding * 2;

    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context for star sprite');

    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Draw radial gradient (once, stored forever)
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      size,
    );
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    return {
      canvas,
      width: canvasSize,
      height: canvasSize,
    };
  }

  /**
   * Create a pre-rendered nebula sprite with multi-stop radial gradient.
   */
  private createNebulaSprite(nebula: NebulaCloud): SpriteCache {
    const padding = 4;
    const canvasSize = Math.ceil(nebula.radius * 2) + padding * 2;

    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context for nebula sprite');

    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Draw multi-stop radial gradient (once, stored forever)
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      nebula.radius,
    );

    nebula.gradientStops.forEach((stop) => {
      const alpha = stop.alpha;
      const rgba = this.hexToRGBA(nebula.color, alpha);
      gradient.addColorStop(stop.offset, rgba);
    });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    return {
      canvas,
      width: canvasSize,
      height: canvasSize,
    };
  }

  /**
   * Draw a star using pre-rendered sprite (10-20x faster than gradients).
   */
  drawStar(
    ctx: CanvasRenderingContext2D,
    star: CanvasStar,
    currentOpacity: number,
    scrollOffset: number,
  ): void {
    const sprite = this.getStarSprite(star.size, star.color);
    if (!sprite) return;

    const x = Math.floor(star.x - sprite.width / 2);
    const y = Math.floor(star.y - scrollOffset - sprite.height / 2);

    ctx.save();
    ctx.globalAlpha = currentOpacity;
    ctx.drawImage(sprite.canvas, x, y);
    ctx.restore();
  }

  /**
   * Draw a nebula using pre-rendered sprite.
   */
  drawNebula(
    ctx: CanvasRenderingContext2D,
    nebula: NebulaCloud,
    scrollOffset: number,
  ): void {
    const sprite = this.nebulaSprites.get(nebula.id);
    if (!sprite) return;

    const x = Math.floor(nebula.x - sprite.width / 2);
    const y = Math.floor(nebula.y - scrollOffset - sprite.height / 2);

    ctx.save();
    ctx.globalAlpha = nebula.baseOpacity;
    ctx.drawImage(sprite.canvas, x, y);
    ctx.restore();
  }

  /**
   * Get the closest matching pre-rendered star sprite.
   */
  private getStarSprite(size: number, color: string): SpriteCache | undefined {
    // Round size to nearest pre-rendered size for sprite reuse
    const layers = ['background', 'middle', 'foreground'] as const;

    for (const layer of layers) {
      const sizeConfig = STAR_CONFIG.SIZE_BY_LAYER[layer];
      const colors = STAR_CONFIG.COLORS_BY_LAYER[layer];

      if (colors.includes(color as never)) {
        // Find closest size in this layer
        const sizeSteps = 5;
        const minSize = Number(sizeConfig.MIN);
        const maxSize = Number(sizeConfig.MAX);
        let closestSize = minSize;
        let minDiff = Math.abs(size - closestSize);

        for (let i = 0; i < sizeSteps; i++) {
          const testSize =
            minSize + (i / (sizeSteps - 1)) * (maxSize - minSize);
          const diff = Math.abs(size - testSize);
          if (diff < minDiff) {
            minDiff = diff;
            closestSize = testSize;
          }
        }

        const key = this.getStarSpriteKey(closestSize, color);
        return this.starSprites.get(key);
      }
    }

    return undefined;
  }

  /**
   * Generate cache key for star sprite.
   */
  private getStarSpriteKey(size: number, color: string): string {
    return `${size.toFixed(2)}-${color}`;
  }

  /**
   * Convert hex color to RGBA string.
   */
  private hexToRGBA(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /**
   * Clear all sprite caches (useful for cleanup).
   */
  clear(): void {
    this.starSprites.clear();
    this.nebulaSprites.clear();
  }
}
