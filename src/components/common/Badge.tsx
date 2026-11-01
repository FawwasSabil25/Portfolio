import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'subtle';
  className?: string;
}

export function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium transition-colors';
  
  const variants = {
    accent: 'bg-[rgba(6,182,212,0.12)] text-[#22d3ee] border border-[rgba(6,182,212,0.2)]',
    subtle: 'bg-[rgba(255,255,255,0.04)] text-[#94a3b8] border border-[rgba(255,255,255,0.08)]',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
