import { ReactNode } from 'react';
import { Container } from './Container';

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-lg border-b border-[rgba(255,255,255,0.06)] bg-[#08090d]/80`}>
      <Container className="flex items-center justify-between h-16">
        {children}
      </Container>
    </header>
  );
}
