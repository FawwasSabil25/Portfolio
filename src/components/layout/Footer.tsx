import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer
      className="py-10"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          maxWidth: 'var(--container-max)',
          marginInline: 'auto',
          paddingInline: 'clamp(1rem, 4vw, 2rem)',
        }}
      >
        {children}
      </div>
    </footer>
  );
}
