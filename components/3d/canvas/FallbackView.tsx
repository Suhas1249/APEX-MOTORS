'use client';

import React from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';
import { BRAND } from '@/lib/constants/brand';

interface FallbackViewProps {
  colorHex?: string;
  colorName?: string;
}

export function FallbackView({
  colorHex = '#161616',
  colorName = 'Graphite Black',
}: FallbackViewProps) {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-radial from-apex-graphite via-apex-void to-apex-void p-8 overflow-hidden">
      {/* Ambient background studio glow */}
      <div
        className="absolute w-[600px] h-[300px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ backgroundColor: colorHex }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-6">
        {/* Subtle hardware notice */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/[0.03] rounded-full text-[10px] uppercase tracking-widest text-apex-muted">
          <ShieldAlert className="w-3.5 h-3.5 text-apex-copper" />
          <span>High-Fidelity 2D Experience Mode</span>
        </div>

        {/* Architectural 2D Car Silhouette Graphic */}
        <div className="relative w-full max-w-lg mx-auto py-8">
          <svg
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            {/* Ground shadow */}
            <ellipse cx="300" cy="180" rx="260" ry="12" fill="black" opacity="0.6" filter="blur(6px)" />
            {/* Aerodynamic Body Contour */}
            <path
              d="M 50 150 Q 80 145 130 145 L 180 115 Q 260 70 370 70 Q 450 72 500 120 L 550 140 Q 565 145 565 155 L 490 155 Q 480 125 440 125 Q 400 125 390 155 L 210 155 Q 200 125 160 125 Q 120 125 110 155 Z"
              fill={colorHex}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            {/* Roof Glasshouse */}
            <path
              d="M 210 112 Q 275 75 365 75 Q 430 78 460 115 Z"
              fill="rgba(20, 24, 30, 0.95)"
              stroke="rgba(184, 107, 62, 0.4)"
              strokeWidth="1"
            />
            {/* Headlight beam line */}
            <path d="M 545 138 L 590 142" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M 540 144 L 585 148" stroke="#b86b3e" strokeWidth="2" strokeLinecap="round" />
            {/* Wheels */}
            <circle cx="160" cy="155" r="26" fill="#0d0d0d" stroke="#555" strokeWidth="3" />
            <circle cx="160" cy="155" r="16" fill="#222" stroke="#b86b3e" strokeWidth="1.5" />
            <circle cx="440" cy="155" r="26" fill="#0d0d0d" stroke="#555" strokeWidth="3" />
            <circle cx="440" cy="155" r="16" fill="#222" stroke="#b86b3e" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-apex-copper">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Finish: {colorName}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase">
            APEX R1 CONCEPT MACHINE
          </h3>
          <p className="text-xs text-apex-muted max-w-md mx-auto leading-relaxed">
            Optimized for devices with restricted WebGL graphics acceleration. Complete telemetry and interactive configurator controls remain fully operational.
          </p>
        </div>
      </div>
    </div>
  );
}
