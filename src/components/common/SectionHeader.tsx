interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <div className={`mb-10 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#06b6d4]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#f8fafc] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
