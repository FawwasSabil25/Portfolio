/**
 * FloralWatermark — mirrored botanical pair for the contact section background.
 * Desktop only (hidden below 1024px via className from parent).
 * aria-hidden: decorative.
 */
import { CSSProperties } from 'react';

interface FloralWatermarkProps {
  className?: string;
  side?: 'left' | 'right';
  style?: CSSProperties;
}

export function FloralWatermark({ className = '', side = 'left', style }: FloralWatermarkProps) {
  const flip = side === 'right' ? 'scale(-1, 1)' : undefined;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip, ...style }}
    >
      <g stroke="rgba(148,175,210,0.18)" strokeLinecap="round" strokeLinejoin="round">
        {/* Stem */}
        <path
          d="M60 195 C58 175 56 155 58 135 C60 115 66 100 62 80 C58 60 50 48 54 30 C57 14 64 8 62 2"
          strokeWidth="1.2"
        />
        {/* Top bloom */}
        <path d="M62 2 C61 -8 57 -14 59 -20 C61 -26 67 -24 68 -18 C69 -12 65 -6 62 2" strokeWidth="0.9" />
        <path d="M62 2 C72 -4 78 -8 82 -16 C78 -20 70 -12 62 2" strokeWidth="0.9" />
        <path d="M62 2 C52 -4 46 -8 42 -16 C46 -20 54 -12 62 2" strokeWidth="0.9" />
        <path d="M62 2 C70 8 74 14 72 22 C68 20 64 10 62 2" strokeWidth="0.9" />
        <path d="M62 2 C54 8 50 14 52 22 C56 20 60 10 62 2" strokeWidth="0.9" />
        <circle cx="62" cy="2" r="3" strokeWidth="1.0" />
        {/* Right branch */}
        <path d="M58 80 C70 72 80 64 84 54 C80 50 72 60 58 80" strokeWidth="0.9" />
        <circle cx="84" cy="54" r="2.5" strokeWidth="0.85" />
        {/* Left leaf */}
        <path d="M62 135 C50 126 44 116 46 106 C50 104 56 114 62 135" strokeWidth="0.9" />
        <path d="M62 135 L50 110" strokeWidth="0.5" />
        {/* Small tendril */}
        <path d="M54 30 C44 24 36 16 38 8 C42 6 46 14 54 30" strokeWidth="0.8" />
        <circle cx="37" cy="8" r="2" strokeWidth="0.75" />
      </g>
    </svg>
  );
}
