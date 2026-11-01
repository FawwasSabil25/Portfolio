import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = [
    'inline-flex items-center justify-center font-sans font-medium',
    'border transition-colors rounded-[var(--radius-md)]',
    'focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-3',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ');

  const variants = {
    // Outlined — fills subtly on hover; no solid fill at rest
    primary: [
      'border-[var(--border-ornament)] text-[var(--fg-primary)]',
      'hover:bg-[rgba(148,175,220,0.08)] hover:border-[var(--accent)]',
    ].join(' '),
    secondary: [
      'border-[var(--border-subtle)] text-[var(--fg-secondary)]',
      'hover:bg-[rgba(148,175,220,0.05)] hover:text-[var(--fg-primary)]',
    ].join(' '),
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
