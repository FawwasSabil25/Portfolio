import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'subtle';
  className?: string;
}

export function Badge({ children, variant = 'subtle', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center transition-colors';

  const variants = {
    // Pill style with border only, no fill
    subtle: 'px-3 py-1 text-sm border text-[#d0d7e2] border-[rgba(148,175,220,0.2)] rounded-full',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
