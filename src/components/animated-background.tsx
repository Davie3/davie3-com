'use client';

import { motion, Variants } from 'framer-motion';
import { useMemo } from 'react';

const STAR_COUNT = 500;

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  gradientStop: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const STAR_COLORS = ['#FFFFFF', '#CCD6F6', '#64FFDA'];

const starVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function AnimatedBackground() {
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5, // Allow for larger stars
      opacity: Math.random() * 0.5 + 0.4, // Increased opacity
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      gradientStop: Math.random() * 30 + 50, // Larger core, less fade
    }));
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          variants={starVariants}
          className="absolute rounded-full"
          animate={{ opacity: [0, star.opacity, 0] }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3 + 0.5, // Add delay to offset from initial fade-in
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
