import type { NextConfig } from 'next';
import { URL_MAPPINGS } from './src/constants/site-config';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' static.cloudflareinsights.com challenges.cloudflare.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' challenges.cloudflare.com;
    connect-src 'self' cloudflareinsights.com;
    block-all-mixed-content;
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
};

export default nextConfig;
