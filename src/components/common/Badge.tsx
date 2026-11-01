import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'subtle';
  className?: string;
}

export function Badge({ children, variant = 'subtle', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-2 py-0.5 text-xs font-mono tracking-wide transition-colors';

  const variants = {
    // Silver-blue accent chip — rectangular, border only, no fill
    accent: 'border text-[var(--accent)] border-[var(--border-ornament)] rounded-[3px]',
    // Neutral metadata chip — barely-there border
    subtle: 'border text-[var(--fg-secondary)] border-[var(--border-subtle)] rounded-[3px]',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
