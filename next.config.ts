import type { NextConfig } from 'next';
import { URL_MAPPINGS } from './src/constants/config/redirect-config';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline'
        static.cloudflareinsights.com challenges.cloudflare.com *.cloudflare.com
        *.vercel-insights.com *.vercel-analytics.com https://vercel.live *.vercel.app
        https://www.davie3.com/cdn-cgi/ https://davie3.com/cdn-cgi/
        'wasm-unsafe-eval';
    style-src 'self' 'unsafe-inline'
        https://vercel.live;
    img-src 'self' blob: data:
        https://vercel.live https://vercel.com;
    font-src 'self'
        https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self'
        challenges.cloudflare.com *.cloudflare.com
        https://vercel.live;
    connect-src 'self'
        cloudflareinsights.com challenges.cloudflare.com *.cloudflare.com
        *.vercel-insights.com *.vercel-analytics.com vitals.vercel-insights.com
        https://vercel.live *.vercel.app wss://ws-us3.pusher.com
        https://vitals.vercel-analytics.com;
    worker-src 'self' blob:;
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
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
