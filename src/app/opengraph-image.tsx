import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Astraen Software Laboratory';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function Image() {
    const gridPattern = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23ededed' stroke-width='0.5' stroke-opacity='0.06'/%3e%3c/svg%3e`;

    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#050505',
                color: '#ededed',
                fontFamily: 'monospace',
                position: 'relative',
            }}
        >
            {/* Background Grid */}
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url("${gridPattern}")`,
                }}
            />
            {/* Radial Glow */}
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                        'radial-gradient(circle at 50% 50%, rgba(237, 237, 237, 0.06) 0%, rgba(237, 237, 237, 0) 60%)',
                }}
            />

            {/* Top Left Corner */}
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: 40,
                    left: 40,
                    width: 20,
                    height: 20,
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 10V0H10"
                        stroke="#ededed"
                        strokeOpacity="0.1"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* Bottom Right Corner */}
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: 40,
                    right: 40,
                    width: 20,
                    height: 20,
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 10L20 20L10 20"
                        stroke="#ededed"
                        strokeOpacity="0.1"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* Top Right Metadata */}
            <div
                style={{
                    position: 'absolute',
                    top: 40,
                    right: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    color: '#444444',
                    fontSize: 16,
                    letterSpacing: '0.1em',
                }}
            >
                <span style={{ display: 'flex' }}>CORE_SYS: v0.0.1</span>
                <span style={{ display: 'flex', marginTop: 8 }}>
                    STATUS: OPERATIONAL
                </span>
                <div
                    style={{
                        display: 'flex',
                        height: 1,
                        width: 150,
                        backgroundColor: '#ededed',
                        opacity: 0.05,
                        marginTop: 12,
                    }}
                />
            </div>

            {/* Center Content */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 32,
                    transform: 'translateY(-10px)', // Slight optical adjustment
                }}
            >
                <svg
                    width="150"
                    height="155"
                    viewBox="130 120 252 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'flex' }}
                >
                    <path
                        d="M256 120L130 380H190L256 240L322 380H382L256 120Z"
                        fill="#ededed"
                    />
                    <circle cx="256" cy="340" r="30" fill="#ededed" />
                    <path
                        d="M256 120L130 380H190L256 240L322 380H382L256 120Z"
                        stroke="#050505"
                        strokeWidth="12"
                        strokeLinejoin="round"
                    />
                </svg>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 32,
                        fontWeight: 700,
                        letterSpacing: '0.5em',
                        textAlign: 'center',
                        color: '#ededed',
                    }}
                >
                    ASTRAEN
                </div>
            </div>
        </div>,
        {
            ...size,
        }
    );
}
