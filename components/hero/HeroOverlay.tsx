'use client';

import React from 'react';
import { ArrowDown, Lightbulb, LightbulbOff, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/constants/brand';

interface HeroOverlayProps {
  headlightsOn: boolean;
  onToggleHeadlights: () => void;
}

export function HeroOverlay({
  headlightsOn,
  onToggleHeadlights,
}: HeroOverlayProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-12 pointer-events-none select-none z-20">
      {/* Top Left Eyebrow / Model Badge */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-apex-copper shadow-copper-glow" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-apex-copper font-medium">
            APEX R1 // CONCEPT CHASSIS 01
          </span>
        </div>

        {/* Headlight interactive trigger in hero */}
        <button
          onClick={onToggleHeadlights}
          className="pointer-events-auto flex items-center gap-2.5 px-3 py-1.5 border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-apex-copper text-[10px] uppercase tracking-widest text-apex-silver hover:text-white transition-all cursor-pointer group"
          title="Toggle Headlights"
        >
          {headlightsOn ? (
            <Lightbulb className="w-3.5 h-3.5 text-apex-copper group-hover:drop-shadow-[0_0_8px_rgba(184,107,62,0.8)]" />
          ) : (
            <LightbulbOff className="w-3.5 h-3.5 text-apex-metal" />
          )}
          <span>OPTICS: {headlightsOn ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Main Architectural Hero Typography (Framed so the vehicle remains visually prominent in center) */}
      <div className="max-w-3xl space-y-6 my-auto">
        <div className="space-y-2">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-apex-copper font-medium block">
            {BRAND.name}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase font-sans leading-[0.95]">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-apex-silver to-apex-metal">
              TO MOVE.
            </span>
          </h1>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-apex-silver font-light tracking-[0.25em] uppercase">
          {BRAND.subTagline}
        </p>

        {/* Hero CTA Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-4 pointer-events-auto">
          <Button
            variant="copper"
            size="lg"
            asLink
            href="#design"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Explore The Machine
          </Button>

          <Button
            variant="secondary"
            size="lg"
            asLink
            href="#test-drive"
            icon={<ArrowUpRight className="w-4 h-4 text-apex-copper" />}
          >
            Book a Test Drive
          </Button>
        </div>
      </div>

      {/* Bottom Technical Telemetry Bar */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8 border-t border-white/[0.08]">
        <div className="flex items-center gap-8 text-[10px] md:text-xs tracking-widest uppercase text-apex-metal">
          <div>
            <span className="text-white font-mono text-sm block">520 HP</span>
            <span>DUAL MOTOR</span>
          </div>
          <span className="h-6 w-px bg-white/10" />
          <div>
            <span className="text-white font-mono text-sm block">3.4 SEC</span>
            <span>0 - 100 KM/H</span>
          </div>
          <span className="h-6 w-px bg-white/10" />
          <div>
            <span className="text-white font-mono text-sm block">320 KM/H</span>
            <span>TOP SPEED</span>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-apex-muted pointer-events-auto">
          <span className="w-8 h-px bg-apex-copper/60" />
          <a href="#design" className="hover:text-white transition-colors">
            SCROLL TO COMMENCE JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
}
