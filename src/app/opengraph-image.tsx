import { ImageResponse } from 'next/og';

import { PERSONAL_INFO } from '@/constants/personal';

export const runtime = 'edge';
export const alt = `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {PERSONAL_INFO.FULL_NAME}
          </h1>
          <p
            style={{
              fontSize: '32px',
              margin: '0',
              color: '#94a3b8',
            }}
          >
            {PERSONAL_INFO.TITLE}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
