'use client';

import React, { useState, useEffect } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { BRAND } from '@/lib/constants/brand';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utilities/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-apex-void/85 backdrop-blur-md py-4 border-b border-white/[0.08] shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6 md:py-8'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-white font-sans transition-colors group-hover:text-apex-copper">
                APEX
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-apex-copper uppercase -mt-1 font-medium">
                MOTORS
              </span>
            </div>
            <span className="hidden sm:inline-block h-4 w-px bg-white/20 mx-1" />
            <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] text-apex-muted/80 uppercase font-light">
              CONCEPT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {BRAND.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[11px] uppercase tracking-[0.25em] text-apex-muted hover:text-white font-medium transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-apex-copper group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              asLink
              href="#test-drive"
              className="hidden sm:inline-flex border-white/20 hover:border-apex-copper text-xs"
              icon={<ArrowUpRight className="w-3.5 h-3.5 text-apex-copper" />}
            >
              Book Test Drive
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-apex-silver hover:text-white transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
