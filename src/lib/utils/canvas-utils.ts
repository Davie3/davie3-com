import type {
  CanvasStar,
  NebulaCloud,
  ShootingStar,
} from '@/types/config-types';

/**
 * Cache for storing pre-created radial gradients to avoid recreating them every frame.
 */
export class GradientCache {
  private cache: Map<string, CanvasGradient> = new Map();

  get(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string,
  ): CanvasGradient {
    const key = `${x}-${y}-${radius}-${color}`;

    let gradient = this.cache.get(key);
    if (!gradient) {
      gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      this.cache.set(key, gradient);
    }

    return gradient;
  }

  clear(): void {
    this.cache.clear();
  }
}

/**
 * Check if a particle is within the viewport (with buffer for smooth transitions).
 */
export function isInViewport(
  y: number,
  scrollY: number,
  canvasHeight: number,
  buffer: number,
): boolean {
  const adjustedY = y - scrollY;
  return adjustedY >= -buffer && adjustedY <= canvasHeight + buffer;
}

/**
 * Draw a star particle with radial glow effect.
 */
export function drawStar(
  ctx: CanvasRenderingContext2D,
  star: CanvasStar,
  currentOpacity: number,
  scrollOffset: number,
): void {
  const x = Math.floor(star.x);
  const y = Math.floor(star.y - scrollOffset);
  const radius = star.size;

  ctx.save();
  ctx.globalAlpha = currentOpacity;

  // Create radial gradient for glow effect
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, star.color);
  gradient.addColorStop(1, 'transparent');

  ctx.fillStyle = gradient;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);

  ctx.restore();
}

/**
 * Draw a nebula cloud with multi-stop radial gradient.
 */
export function drawNebula(
  ctx: CanvasRenderingContext2D,
  nebula: NebulaCloud,
  scrollOffset: number,
): void {
  const x = Math.floor(nebula.x);
  const y = Math.floor(nebula.y - scrollOffset);
  const radius = nebula.radius;

  ctx.save();
  ctx.globalAlpha = nebula.baseOpacity;

  // Create radial gradient with multiple stops
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

  nebula.gradientStops.forEach((stop) => {
    // Convert hex color to rgba
    const alpha = stop.alpha * nebula.baseOpacity;
    const rgba = hexToRGBA(nebula.color, alpha);
    gradient.addColorStop(stop.offset, rgba);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);

  ctx.restore();
}

/**
 * Draw a shooting star with gradient trail.
 */
export function drawShootingStar(
  ctx: CanvasRenderingContext2D,
  shootingStar: ShootingStar,
): void {
  if (!shootingStar.active) return;

  const x = Math.floor(shootingStar.x);
  const y = Math.floor(shootingStar.y);
  const endX = Math.floor(x - shootingStar.vx * 0.1);
  const endY = Math.floor(y - shootingStar.vy * 0.1);

  ctx.save();
  ctx.globalAlpha = shootingStar.opacity;

  // Create linear gradient for trail effect
  const gradient = ctx.createLinearGradient(x, y, endX, endY);
  gradient.addColorStop(0, '#ff6b35');
  gradient.addColorStop(1, 'transparent');

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.restore();
}

/**
 * Convert hex color to RGBA string.
 */
function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
