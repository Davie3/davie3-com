'use client';

import { useEffect, useRef, useState } from 'react';

import { CANVAS_CONFIG } from '@/constants/config/animation-config';
import { drawShootingStar, isInViewport } from '@/lib/utils/canvas-utils';
import {
  generateStarsByLayer,
  ShootingStarPool,
  updateStarTwinkle,
} from '@/lib/utils/particle-system';
import { SpriteRenderer } from '@/lib/utils/sprite-renderer';

import type { JSX } from 'react';

export function AnimatedBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const scrollYRef = useRef<number>(0);

  // Initialize particles and sprite renderer once on mount
  const [particles] = useState(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

    return {
      stars: {
        background: generateStarsByLayer(
          CANVAS_CONFIG.layers.background.particleCount,
          'background',
          width,
          height,
        ),
        middle: generateStarsByLayer(
          CANVAS_CONFIG.layers.middle.particleCount,
          'middle',
          width,
          height,
        ),
        foreground: generateStarsByLayer(
          CANVAS_CONFIG.layers.foreground.particleCount,
          'foreground',
          width,
          height,
        ),
      },
      shootingStarPool: new ShootingStarPool(5),
    };
  });

  // Initialize sprite renderer (will be created on client-side only)
  const spriteRendererRef = useRef<SpriteRenderer | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize sprite renderer on client-side only (avoid SSR issues)
    if (!spriteRendererRef.current) {
      const renderer = new SpriteRenderer();
      renderer.preRenderStars();
      spriteRendererRef.current = renderer;
    }

    const spriteRenderer = spriteRendererRef.current;

    // Resize handler
    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Scroll handler (passive for performance)
    const handleScroll = (): void => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation loop
    const animate = (timestamp: number): void => {
      const deltaTime = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = scrollYRef.current;

      // 1. Render stars by layer using pre-rendered sprites
      const layers = [
        {
          stars: particles.stars.background,
          speed: CANVAS_CONFIG.layers.background.speed,
        },
        {
          stars: particles.stars.middle,
          speed: CANVAS_CONFIG.layers.middle.speed,
        },
        {
          stars: particles.stars.foreground,
          speed: CANVAS_CONFIG.layers.foreground.speed,
        },
      ];

      layers.forEach(({ stars, speed }) => {
        const layerScrollOffset = scrollY * speed;
        stars.forEach((star) => {
          if (
            isInViewport(star.y, layerScrollOffset, canvas.height, CANVAS_CONFIG.viewportBuffer)
          ) {
            const currentOpacity = prefersReducedMotion
              ? star.baseOpacity
              : updateStarTwinkle(star, deltaTime);
            spriteRenderer.drawStar(ctx, star, currentOpacity, layerScrollOffset);
          }
        });
      });

      // 2. Update and render shooting stars
      if (!prefersReducedMotion) {
        particles.shootingStarPool.update(deltaTime, canvas.width, canvas.height);
        particles.shootingStarPool.getActiveStars().forEach((shootingStar) => {
          drawShootingStar(ctx, shootingStar);
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 h-full w-full"
      aria-hidden="true"
      role="presentation"
    />
  );
}
