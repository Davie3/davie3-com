import { Geist, Geist_Mono } from 'next/font/google';

/**
 * Font configurations for the application.
 * Centralized font setup for consistency across the app.
 */

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Only preload primary font
});

/**
 * Font variable classes for use in className props.
 */
export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
