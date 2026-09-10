import React from 'react';
import { BRAND } from '@/lib/constants/brand';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-apex-void border-t border-white/[0.08] pt-20 pb-12 overflow-hidden z-20">
      {/* Background ambient copper flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[120px] bg-apex-copper/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-light tracking-[0.25em] text-white font-sans">
                APEX
              </span>
              <span className="text-xs tracking-[0.4em] text-apex-copper uppercase -mt-1 font-medium">
                MOTORS
              </span>
            </div>
            <p className="text-xs tracking-[0.25em] text-apex-muted font-light uppercase">
              {BRAND.tagline}
            </p>
            <p className="text-xs text-apex-metal max-w-md leading-relaxed pt-2">
              A high-fidelity digital automotive showcase demonstrating advanced 3D WebGL execution,
              cinematic lighting choreography, and interactive engineering telemetry.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-apex-copper font-medium block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-apex-muted tracking-widest font-light uppercase">
              {BRAND.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#test-drive"
                  className="hover:text-apex-copper transition-colors inline-block"
                >
                  Test Drive
                </a>
              </li>
            </ul>
          </div>

          {/* Concept Verification & Disclaimer */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-apex-copper font-medium block">
              Classification
            </span>
            <p className="text-xs text-apex-muted/80 leading-relaxed font-light">
              Fictional automotive design concept. All vehicle specifications, telemetry figures, and models are simulated for client demonstration purposes.
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs tracking-widest text-apex-copper hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with AURAWEBS discrete credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-apex-muted font-light">
          <div>
            <span>© 2026 APEX MOTORS. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Subtle AURAWEBS Portfolio Badge */}
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.08] px-4 py-2 rounded-none">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white font-medium">
              AURAWEBS
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-[10px] tracking-widest text-apex-copper font-light">
              Build. Automate. Evolve.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
