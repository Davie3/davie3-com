import type { NextConfig } from 'next';
import { URL_MAPPINGS } from './src/lib/config/redirect-config';

const isDevelopment = process.env.VERCEL_ENV !== 'production';

const cspHeader = `
  default-src 'self';
  script-src 'self' ${isDevelopment ? "'unsafe-eval'" : ''}
    static.cloudflareinsights.com challenges.cloudflare.com *.cloudflare.com
    *.vercel-insights.com *.vercel-analytics.com https://vercel.live *.vercel.app;
  style-src 'self' 'unsafe-inline' https://vercel.live;
  img-src 'self' blob: data: https://vercel.live https://vercel.com;
  font-src 'self' https://vercel.live https://assets.vercel.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src challenges.cloudflare.com *.cloudflare.com https://vercel.live;
  connect-src 'self'
    cloudflareinsights.com challenges.cloudflare.com *.cloudflare.com
    *.vercel-insights.com *.vercel-analytics.com vitals.vercel-insights.com
    https://vercel.live *.vercel.app wss://ws-us3.pusher.com;
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  async redirects() {
    return URL_MAPPINGS.map((mapping) => ({
      source: mapping.source,
      destination: mapping.destination,
      permanent: mapping.permanent,
    }));
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
