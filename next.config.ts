import type { NextConfig } from 'next';
import { URL_MAPPINGS } from './src/constants/url-mappings';

const nextConfig: NextConfig = {
  async redirects() {
    return URL_MAPPINGS.map((mapping) => ({
      source: mapping.source,
      destination: mapping.destination,
      permanent: mapping.permanent,
    }));
  },
};

export default nextConfig;
