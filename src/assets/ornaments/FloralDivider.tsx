/**
 * FloralDivider — botanical sprig for the section divider between Projects and Skills.
 * Three small blooms on a fine horizontal vine with trailing tendrils.
 * aria-hidden: decorative.
 */
interface FloralDividerProps {
  className?: string;
}

export function FloralDivider({ className = '' }: FloralDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-0 w-full ${className}`}
    >
      {/* Left hairline */}
      <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />

      {/* Floral cluster */}
      <svg
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '160px', height: '40px', flexShrink: 0 }}
      >
        <g stroke="rgba(148,175,210,0.32)" strokeLinecap="round" strokeLinejoin="round">
          {/* Horizontal vine */}
          <path 
            d="M10 20 C30 18 50 22 80 20 C110 18 130 22 150 20" 
            strokeWidth="0.9" 
            className="floral-line-reveal"
          />

          {/* Left tendril up */}
          <path 
            d="M28 20 C26 14 22 10 24 6 C26 2 30 4 30 9 C30 14 28 17 28 20" 
            strokeWidth="0.8"
            className="floral-line-reveal"
            style={{ animationDelay: '0.5s' }}
          />
          <circle cx="27" cy="6" r="2" strokeWidth="0.8" />

          {/* Center bloom */}
          <path 
            d="M80 20 C80 12 76 6 80 2 C84 6 80 12 80 20" 
            strokeWidth="0.85"
            className="floral-line-reveal"
            style={{ animationDelay: '0.6s' }}
          />
          <path 
            d="M80 20 C88 16 94 12 96 6 C92 4 86 10 80 20" 
            strokeWidth="0.85"
            className="floral-line-reveal"
            style={{ animationDelay: '0.65s' }}
          />
          <path 
            d="M80 20 C72 16 66 12 64 6 C68 4 74 10 80 20" 
            strokeWidth="0.85"
            className="floral-line-reveal"
            style={{ animationDelay: '0.7s' }}
          />
          <path 
            d="M80 20 C88 24 92 30 90 36 C86 34 82 26 80 20" 
            strokeWidth="0.85"
            className="floral-line-reveal"
            style={{ animationDelay: '0.75s' }}
          />
          <path 
            d="M80 20 C72 24 68 30 70 36 C74 34 78 26 80 20" 
            strokeWidth="0.85"
            className="floral-line-reveal"
            style={{ animationDelay: '0.8s' }}
          />
          <circle cx="80" cy="20" r="2.5" strokeWidth="0.9" />

          {/* Right tendril down */}
          <path 
            d="M132 20 C134 26 130 32 132 36 C134 40 138 38 137 33 C136 28 133 24 132 20" 
            strokeWidth="0.8"
            className="floral-line-reveal"
            style={{ animationDelay: '0.9s' }}
          />
          <circle cx="133" cy="36" r="2" strokeWidth="0.8" />

          {/* Left small bud */}
          <path 
            d="M44 20 C43 15 40 11 42 7 C44 3 48 5 47 10 C46 15 44 17 44 20" 
            strokeWidth="0.75"
            className="floral-line-reveal"
            style={{ animationDelay: '1.0s' }}
          />
          <circle cx="43" cy="7" r="1.5" strokeWidth="0.75" />

          {/* Right small bud */}
          <path 
            d="M116 20 C117 15 120 11 118 7 C116 3 112 5 113 10 C114 15 116 17 116 20" 
            strokeWidth="0.75"
            className="floral-line-reveal"
            style={{ animationDelay: '1.1s' }}
          />
          <circle cx="117" cy="7" r="1.5" strokeWidth="0.75" />
        </g>
      </svg>

      {/* Right hairline */}
      <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
    </div>
  );
}
