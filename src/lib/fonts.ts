import { Geist, Geist_Mono } from 'next/font/google';

/**
 * Font configurations for the application.
 * Centralized font setup for consistency across the app.
 */

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Font variable classes for use in className props.
 */
export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
