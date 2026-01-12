import type { ShootingStar } from '@/types/config-types';

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
 * Draw a shooting star with gradient trail.
 */
export function drawShootingStar(ctx: CanvasRenderingContext2D, shootingStar: ShootingStar): void {
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
