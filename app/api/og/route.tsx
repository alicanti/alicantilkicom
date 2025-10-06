import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Alican Tilki';
    const description = searchParams.get('description') || 'Systems & Infrastructure Engineer';

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
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '120px',
                height: '120px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '40px',
              }}
            >
              AT
            </div>
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate image: ${e.message}`, {
      status: 500,
    });
  }
}

