import React from 'react';
import { cn } from '@/lib/utilities/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col space-y-3', alignment[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-apex-copper/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-apex-copper font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-apex-text font-sans uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-apex-muted font-light max-w-2xl leading-relaxed tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
