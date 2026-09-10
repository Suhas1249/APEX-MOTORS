'use client';

import React from 'react';
import { cn } from '@/lib/utilities/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'copper';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans tracking-[0.2em] uppercase font-medium transition-all duration-300 select-none group cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-[10px] px-4 py-2 gap-2',
    md: 'text-xs px-6 py-3.5 gap-2.5',
    lg: 'text-xs md:text-sm px-8 py-4 gap-3',
  };

  const variantStyles = {
    primary:
      'bg-apex-graphite text-apex-text border border-white/20 hover:border-apex-copper hover:text-white hover:shadow-copper-glow hover:-translate-y-0.5',
    secondary:
      'bg-transparent text-apex-silver border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.03]',
    copper:
      'bg-apex-copper text-white border border-apex-copper hover:bg-apex-copper/90 hover:shadow-copper-glow-lg hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-apex-muted hover:text-apex-text px-2 py-1 tracking-widest',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
      {/* Subtle light sweep reflection */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
    </>
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
