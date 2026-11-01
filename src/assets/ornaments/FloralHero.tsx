/**
 * FloralHero — fine-line botanical engraving for the hero right column.
 * A single tall stem with two open blooms, curling tendrils, and small leaf pairs.
 * Original artwork; inspired by Delftware botanical motifs.
 * aria-hidden: purely decorative.
 */
import { CSSProperties } from 'react';

interface FloralHeroProps {
  className?: string;
  opacity?: number;
  style?: CSSProperties;
}

export function FloralHero({ className = '', opacity = 1, style }: FloralHeroProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <g stroke="url(#delft-hero-grad)" strokeLinecap="round" strokeLinejoin="round">

        {/* ── Main stem – rises from bottom-center ── */}
        <path
          d="M140 510 C138 480 134 450 136 420 C138 390 144 370 140 345
             C136 318 128 300 132 272 C136 244 148 230 144 200
             C140 170 130 154 136 125 C142 96 152 80 148 55"
          strokeWidth="1.4"
        />

        {/* ── Upper bloom – open five-petal flower ── */}
        {/* Petal 1 – top */}
        <path d="M148 55 C145 38 138 28 140 16 C142 4 152 2 155 14 C158 26 152 38 148 55" strokeWidth="1.1" />
        {/* Petal 2 – upper-right */}
        <path d="M148 55 C163 46 174 40 182 30 C190 20 186 10 176 14 C166 18 158 34 148 55" strokeWidth="1.1" />
        {/* Petal 3 – lower-right */}
        <path d="M148 55 C162 64 172 72 180 84 C188 96 182 106 172 100 C162 94 156 74 148 55" strokeWidth="1.1" />
        {/* Petal 4 – lower-left */}
        <path d="M148 55 C134 64 124 72 116 84 C108 96 114 106 124 100 C134 94 140 74 148 55" strokeWidth="1.1" />
        {/* Petal 5 – upper-left */}
        <path d="M148 55 C133 46 122 40 114 30 C106 20 110 10 120 14 C130 18 138 34 148 55" strokeWidth="1.1" />
        {/* Bloom center dot */}
        <circle cx="148" cy="55" r="4" strokeWidth="1.2" />
        {/* Stamen lines */}
        <path d="M148 55 L148 44 M148 55 L155 49 M148 55 L141 49" strokeWidth="0.8" />

        {/* ── Mid bloom – smaller, slightly open ── */}
        {/* Petal 1 */}
        <path d="M144 200 C142 186 136 178 138 168 C140 158 148 157 150 166 C152 175 148 186 144 200" strokeWidth="1.0" />
        {/* Petal 2 */}
        <path d="M144 200 C156 193 164 188 169 180 C174 172 170 164 162 168 C154 172 150 186 144 200" strokeWidth="1.0" />
        {/* Petal 3 */}
        <path d="M144 200 C155 208 162 215 167 224 C172 233 166 241 158 235 C150 229 148 214 144 200" strokeWidth="1.0" />
        {/* Petal 4 */}
        <path d="M144 200 C133 208 126 215 121 224 C116 233 122 241 130 235 C138 229 140 214 144 200" strokeWidth="1.0" />
        {/* Petal 5 */}
        <path d="M144 200 C132 193 124 188 119 180 C114 172 118 164 126 168 C134 172 138 186 144 200" strokeWidth="1.0" />
        <circle cx="144" cy="200" r="3.5" strokeWidth="1.1" />

        {/* ── Upper-right branch ── */}
        <path d="M136 125 C148 114 162 108 172 98 C178 92 178 84 170 84" strokeWidth="1.0" />
        {/* Branch bud */}
        <path d="M170 84 C170 76 166 70 168 63 C170 56 176 57 177 63 C178 70 174 76 170 84" strokeWidth="0.9" />
        <circle cx="170" cy="64" r="2.5" strokeWidth="0.9" />

        {/* ── Upper-left tendril ── */}
        <path
          d="M136 125 C120 120 108 112 100 100 C94 90 98 78 108 82 C118 86 122 100 116 114 C110 126 100 128 94 120"
          strokeWidth="0.9"
        />

        {/* ── Leaf pair at ~345 ── */}
        {/* Right leaf */}
        <path d="M140 345 C152 336 162 326 164 316 C166 306 158 302 150 310 C142 318 140 332 140 345" strokeWidth="1.0" />
        {/* Leaf midrib */}
        <path d="M140 345 L155 318" strokeWidth="0.6" />
        {/* Left leaf */}
        <path d="M140 345 C128 336 118 326 116 316 C114 306 122 302 130 310 C138 318 140 332 140 345" strokeWidth="1.0" />
        <path d="M140 345 L125 318" strokeWidth="0.6" />

        {/* ── Small leaf pair at ~272 ── */}
        <path d="M132 272 C142 264 148 256 146 248 C144 240 136 240 132 248 C128 256 130 264 132 272" strokeWidth="0.95" />
        <path d="M132 272 L140 252" strokeWidth="0.55" />
        <path d="M132 272 C122 264 116 256 118 248 C120 240 128 240 132 248" strokeWidth="0.95" />

        {/* ── Lower right curling tendril ── */}
        <path
          d="M140 420 C158 410 170 398 174 384 C178 370 166 362 156 370 C146 378 148 394 158 398 C168 402 176 394 174 384"
          strokeWidth="0.85"
        />

        {/* ── Lower left small branch with bud ── */}
        <path d="M138 390 C124 382 114 372 110 360 C106 350 112 342 120 348" strokeWidth="0.9" />
        {/* Bud */}
        <path d="M120 348 C118 340 122 334 124 328 C126 322 130 324 130 330 C130 336 126 342 120 348" strokeWidth="0.85" />

        {/* ── Small dot accents (berries) ── */}
        <circle cx="94" cy="120" r="3" strokeWidth="0.9" />
        <circle cx="88" cy="112" r="2" strokeWidth="0.8" />
        <circle cx="174" cy="98" r="2.5" strokeWidth="0.8" />

        {/* ── Tiny leaf at base ── */}
        <path d="M138 470 C148 462 154 452 150 444 C146 436 138 438 136 446 C134 454 136 462 138 470" strokeWidth="0.9" />
        <path d="M140 460 C142 452 148 444 150 444" strokeWidth="0.5" />
        <path d="M138 470 C128 462 122 452 126 444 C130 436 138 438" strokeWidth="0.9" />
      </g>

      <defs>
        <linearGradient id="delft-hero-grad" x1="140" y1="16" x2="140" y2="510" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(200,220,245,0.40)" />
          <stop offset="40%"  stopColor="rgba(148,175,210,0.28)" />
          <stop offset="100%" stopColor="rgba(93,116,153,0.14)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
