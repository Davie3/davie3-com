'use client';

import { Turnstile as ReactTurnstile } from '@marsidev/react-turnstile';
import type { TurnstileProps } from '@marsidev/react-turnstile';
import type { JSX } from 'react';

import { env } from '@/env';

/**
 * Cloudflare Turnstile component.
 *
 * @param {TurnstileProps} props - The props for the Turnstile component.
 * @returns {JSX.Element} The rendered Turnstile component.
 */
export function Turnstile({
  siteKey,
  ...props
}: Omit<TurnstileProps, 'siteKey'> & { siteKey?: string }): JSX.Element {
  return (
    <ReactTurnstile
      siteKey={
        siteKey ??
        env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
        '1x00000000000000000000AA'
      }
      {...props}
    />
  );
}
