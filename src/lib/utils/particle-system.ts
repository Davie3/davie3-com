import type { CanvasStar, ShootingStar, LayerType } from '@/types/config-types';
import {
  STAR_CONFIG,
  SHOOTING_STAR_CONFIG,
} from '@/constants/config/animation-config';

/**
 * Generate stars for a specific layer with layer-specific properties.
 */
export function generateStarsByLayer(
  count: number,
  layer: LayerType,
  width: number,
  height: number,
): CanvasStar[] {
  const layerConfig = STAR_CONFIG.SIZE_BY_LAYER[layer];
  const layerColors = STAR_CONFIG.COLORS_BY_LAYER[layer];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height * 2,
    size: Math.random() * (layerConfig.MAX - layerConfig.MIN) + layerConfig.MIN,
    baseOpacity:
      Math.random() *
        (STAR_CONFIG.OPACITY_RANGE.MAX - STAR_CONFIG.OPACITY_RANGE.MIN) +
      STAR_CONFIG.OPACITY_RANGE.MIN,
    color: layerColors[Math.floor(Math.random() * layerColors.length)],
    layer,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed:
      Math.random() *
        (STAR_CONFIG.TWINKLE_SPEED_RANGE.MAX -
          STAR_CONFIG.TWINKLE_SPEED_RANGE.MIN) +
      STAR_CONFIG.TWINKLE_SPEED_RANGE.MIN,
  }));
}

/**
 * Update star twinkle animation and return current opacity.
 */
export function updateStarTwinkle(star: CanvasStar, deltaTime: number): number {
  // Mutate phase (acceptable for performance)
  const mutableStar = star as { twinklePhase: number };
  mutableStar.twinklePhase += (deltaTime / 1000) * star.twinkleSpeed;

  // Sinusoidal opacity: baseOpacity * (0.5 + 0.5 * sin(phase))
  return star.baseOpacity * (0.5 + 0.5 * Math.sin(mutableStar.twinklePhase));
}

/**
 * Update shooting star position and opacity.
 */
function updateShootingStar(
  shootingStar: ShootingStar,
  deltaTime: number,
): void {
  shootingStar.lifetime += deltaTime;

  // Update position
  shootingStar.x += (shootingStar.vx * deltaTime) / 1000;
  shootingStar.y += (shootingStar.vy * deltaTime) / 1000;

  // Linear opacity fade
  shootingStar.opacity = Math.max(
    0,
    1 - shootingStar.lifetime / shootingStar.maxLifetime,
  );

  // Deactivate when lifetime exceeded
  if (shootingStar.lifetime >= shootingStar.maxLifetime) {
    shootingStar.active = false;
  }
}

/**
 * Shooting star object pool for performance.
 */
export class ShootingStarPool {
  private pool: ShootingStar[] = [];
  private lastSpawnTime: number = 0;
  private nextSpawnDelay: number = 0;

  constructor(poolSize: number) {
    this.pool = Array.from({ length: poolSize }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 0,
      opacity: 0,
      lifetime: 0,
      maxLifetime: 0,
      active: false,
    }));

    this.nextSpawnDelay = this.getRandomSpawnDelay();
  }

  private getRandomSpawnDelay(): number {
    return (
      Math.random() *
        (SHOOTING_STAR_CONFIG.SPAWN_INTERVAL.MAX -
          SHOOTING_STAR_CONFIG.SPAWN_INTERVAL.MIN) +
      SHOOTING_STAR_CONFIG.SPAWN_INTERVAL.MIN
    );
  }

  private spawnShootingStar(width: number, height: number): void {
    // Find inactive star in pool
    const star = this.pool.find((s) => !s.active);
    if (!star) return; // Pool exhausted

    // Reset and activate
    const angle =
      ((Math.random() *
        (SHOOTING_STAR_CONFIG.ANGLE_RANGE.MAX -
          SHOOTING_STAR_CONFIG.ANGLE_RANGE.MIN) +
        SHOOTING_STAR_CONFIG.ANGLE_RANGE.MIN) *
        Math.PI) /
      180;
    const speed =
      Math.random() *
        (SHOOTING_STAR_CONFIG.SPEED_RANGE.MAX -
          SHOOTING_STAR_CONFIG.SPEED_RANGE.MIN) +
      SHOOTING_STAR_CONFIG.SPEED_RANGE.MIN;

    star.x = Math.random() * width;
    star.y = 0;
    star.vx = Math.cos(angle) * speed;
    star.vy = Math.sin(angle) * speed;
    star.length =
      Math.random() *
        (SHOOTING_STAR_CONFIG.LENGTH_RANGE.MAX -
          SHOOTING_STAR_CONFIG.LENGTH_RANGE.MIN) +
      SHOOTING_STAR_CONFIG.LENGTH_RANGE.MIN;
    star.opacity = 1;
    star.lifetime = 0;
    star.maxLifetime =
      Math.random() *
        (SHOOTING_STAR_CONFIG.LIFETIME_RANGE.MAX -
          SHOOTING_STAR_CONFIG.LIFETIME_RANGE.MIN) +
      SHOOTING_STAR_CONFIG.LIFETIME_RANGE.MIN;
    star.active = true;
  }

  update(deltaTime: number, width: number, height: number): void {
    this.lastSpawnTime += deltaTime;

    // Check if time to spawn new shooting star
    if (this.lastSpawnTime >= this.nextSpawnDelay) {
      this.spawnShootingStar(width, height);
      this.lastSpawnTime = 0;
      this.nextSpawnDelay = this.getRandomSpawnDelay();
    }

    // Update active shooting stars
    this.pool.forEach((star) => {
      if (star.active) {
        updateShootingStar(star, deltaTime);
      }
    });
  }

  getActiveStars(): ShootingStar[] {
    return this.pool.filter((s) => s.active);
  }
}
