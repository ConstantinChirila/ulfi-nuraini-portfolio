import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = 'Ulfi Nuraini, Cybersecurity Consultant';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social card in the site's paper / plum / rose palette. Uses the
// ImageResponse built-in font (custom brand fonts would need font-data loading);
// the colour system and floral mark carry the identity.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F4EFE0',
          color: '#43293C',
          fontFamily: 'serif',
          padding: 64,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #43293C',
            borderRadius: 24,
            padding: '56px 72px',
            width: '100%',
            height: '100%',
          }}
        >
          {/* five-petal bloom */}
          <svg width="84" height="84" viewBox="0 0 64 64">
            <g fill="#C1607A">
              <circle cx="32" cy="18" r="8" />
              <circle cx="45.3" cy="27.7" r="8" />
              <circle cx="40.2" cy="43.3" r="8" />
              <circle cx="23.8" cy="43.3" r="8" />
              <circle cx="18.7" cy="27.7" r="8" />
            </g>
            <circle cx="32" cy="32" r="7" fill="#F4EFE0" />
          </svg>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: '#6E5A66',
              marginTop: 28,
            }}
          >
            Cybersecurity Consultant
          </div>
          <div style={{ fontSize: 104, fontWeight: 600, marginTop: 12, color: '#43293C' }}>
            Ulfi Nuraini
          </div>
          <div style={{ fontSize: 34, color: '#C1607A', marginTop: 12 }}>
            Security Architecture · Cloud &amp; OT Security · CISSP
          </div>
          <div style={{ fontSize: 26, color: '#6E5A66', marginTop: 40 }}>
            {site.url.replace('https://', '')}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
