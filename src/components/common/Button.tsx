import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent text-[#08090d] hover:bg-[#22d3ee] hover:text-[#08090d]',
    secondary: 'border border-[rgba(255,255,255,0.16)] text-[#f8fafc] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.24)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
