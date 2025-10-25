'use client';

import { motion, type Variants } from 'framer-motion';
import { useState, type JSX } from 'react';
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

const generateStars = (): Star[] => {
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
      STAR_CONFIG.COLORS[Math.floor(Math.random() * STAR_CONFIG.COLORS.length)],
    gradientStop:
      Math.random() *
        (STAR_CONFIG.GRADIENT_RANGE.MAX - STAR_CONFIG.GRADIENT_RANGE.MIN) +
      STAR_CONFIG.GRADIENT_RANGE.MIN,
  }));
};

export function AnimatedBackground(): JSX.Element {
  const [stars] = useState<Star[]>(generateStars);

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
            duration: star.size / 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: star.id * 0.1,
          }}
          style={{
            left: `${star.x.toString()}%`,
            top: `${star.y.toString()}%`,
            width: `${star.size.toString()}px`,
            height: `${star.size.toString()}px`,
            background: `radial-gradient(circle, ${star.color} 0%, transparent ${star.gradientStop.toString()}%)`,
          }}
        />
      ))}
    </motion.div>
  );
}
