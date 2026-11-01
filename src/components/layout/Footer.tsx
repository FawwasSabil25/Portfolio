import { ReactNode } from 'react';
import { Container } from './Container';

interface FooterProps {
  children?: ReactNode;
  className?: string;
}

export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer className={`border-t border-[rgba(255,255,255,0.06)] bg-[#08090d] py-12 ${className}`}>
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        {children}
      </Container>
    </footer>
  );
}
