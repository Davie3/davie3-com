'use client';

import { motion, type Variants } from 'framer-motion';
import { useMemo, type JSX } from 'react';

import {
  STAR_CONFIG,
  ANIMATION_DURATIONS,
  type Star,
} from '../../lib/config/animation-config';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAR_CONFIG.STAGGER_DELAY,
    },
  },
};

const starVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.SLOW,
    },
  },
};

export function AnimatedBackground(): JSX.Element {
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: STAR_CONFIG.COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size:
        Math.random() *
          (STAR_CONFIG.SIZE_RANGE.MAX - STAR_CONFIG.SIZE_RANGE.MIN) +
        STAR_CONFIG.SIZE_RANGE.MIN,
      opacity:
        Math.random() *
          (STAR_CONFIG.OPACITY_RANGE.MAX - STAR_CONFIG.OPACITY_RANGE.MIN) +
        STAR_CONFIG.OPACITY_RANGE.MIN,
      color:
        STAR_CONFIG.COLORS[
          Math.floor(Math.random() * STAR_CONFIG.COLORS.length)
        ],
      gradientStop:
        Math.random() *
          (STAR_CONFIG.GRADIENT_RANGE.MAX - STAR_CONFIG.GRADIENT_RANGE.MIN) +
        STAR_CONFIG.GRADIENT_RANGE.MIN,
    }));
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
      role="presentation"
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          variants={starVariants}
          className="absolute rounded-full"
          animate={{ opacity: [0, star.opacity, 0] }}
          transition={{
            duration:
              Math.random() *
                (STAR_CONFIG.TWINKLE_DURATION.MAX -
                  STAR_CONFIG.TWINKLE_DURATION.MIN) +
              STAR_CONFIG.TWINKLE_DURATION.MIN,
            repeat: Infinity,
            repeatType: 'reverse',
            delay:
              Math.random() *
                (STAR_CONFIG.TWINKLE_DELAY.MAX -
                  STAR_CONFIG.TWINKLE_DELAY.MIN) +
              STAR_CONFIG.TWINKLE_DELAY.MIN,
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: `radial-gradient(circle, ${star.color} 0%, transparent ${star.gradientStop}%)`,
          }}
        />
      ))}
    </motion.div>
  );
}
