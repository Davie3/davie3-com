import { DM_Serif_Display, IBM_Plex_Sans, Bebas_Neue } from 'next/font/google';

/**
 * Font configurations for the application.
 * Centralized font setup for consistency across the app.
 *
 * Typography System - "Midnight Industrial":
 * - Display: DM Serif Display (editorial sophistication)
 * - Body: IBM Plex Sans (technical refinement)
 * - Accent: Bebas Neue (industrial impact)
 */

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-accent',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

/**
 * Font variable classes for use in className props.
 */
export const fontVariables = `${dmSerifDisplay.variable} ${ibmPlexSans.variable} ${bebasNeue.variable}`;
