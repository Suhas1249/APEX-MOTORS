'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/constants/brand';
import { Button } from '@/lib/../components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-apex-void/95 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Top bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
        <div className="flex flex-col">
          <span className="text-lg font-light tracking-[0.25em] text-white font-sans">
            APEX
          </span>
          <span className="text-[9px] tracking-[0.3em] text-apex-copper uppercase">
            MOTORS
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-apex-muted hover:text-white transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center px-8 space-y-6">
        {BRAND.navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between text-2xl font-light tracking-[0.2em] text-apex-silver hover:text-white transition-colors py-2 border-b border-white/5"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs text-apex-copper/60 font-mono">
                0{idx + 1}
              </span>
              {link.label}
            </span>
            <ArrowRight className="w-5 h-5 text-apex-copper opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </a>
        ))}
      </nav>

      {/* Drawer bottom CTA */}
      <div className="p-8 border-t border-white/10 space-y-4">
        <Button
          variant="copper"
          size="lg"
          className="w-full"
          asLink
          href="#test-drive"
          onClick={onClose}
        >
          Book a Test Drive
        </Button>
        <div className="text-center">
          <span className="text-[10px] tracking-[0.2em] text-apex-muted">
            {BRAND.agency.name} CLIENT DEMO
          </span>
        </div>
      </div>
    </div>
  );
}
