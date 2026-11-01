interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        /* Geist Mono eyebrow: category marker only, no // decoration */
        <p
          className="mb-4 text-[0.6875rem] tracking-[0.18em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)' }}
        >
          {eyebrow}
        </p>
      )}
      {/* Geist Serif section heading */}
      <h2
        className="leading-[1.1] tracking-[-0.015em]"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 400,
          fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)',
          color: 'var(--fg-primary)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 leading-relaxed"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--fg-secondary)',
            maxWidth: align === 'center' ? '52ch' : '60ch',
            marginLeft: align === 'center' ? 'auto' : undefined,
            marginRight: align === 'center' ? 'auto' : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
