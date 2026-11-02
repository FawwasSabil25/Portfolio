import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'subtle';
}

export function Badge({ children, variant = 'subtle' }: BadgeProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    subtle: { color: '#d0d7e2', border: '1px solid rgba(148,175,220,0.2)' },
    accent: { color: '#b8935a', border: '1px solid rgba(184,147,90,0.3)' },
  };

  return (
    <span style={{ ...baseStyle, ...variantStyles[variant] }}>
      {children}
    </span>
  );
}

