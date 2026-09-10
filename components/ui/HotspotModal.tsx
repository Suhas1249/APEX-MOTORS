'use client';

import React from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { HotspotItem } from '@/lib/constants/hotspotsData';

interface HotspotModalProps {
  hotspot: HotspotItem | null;
  onClose: () => void;
}

export function HotspotModal({ hotspot, onClose }: HotspotModalProps) {
  if (!hotspot) return null;

  return (
    <div className="fixed inset-x-4 bottom-8 md:bottom-12 md:left-auto md:right-12 z-50 max-w-md w-full animate-in fade-in slide-in-from-bottom-6 duration-300 pointer-events-auto">
      <div className="apex-surface p-6 rounded-none border-l-2 border-l-apex-copper shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-apex-muted hover:text-white p-1 transition-colors"
          aria-label="Close telemetry view"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-apex-copper" />
          <span className="text-[10px] tracking-[0.25em] text-apex-copper font-medium uppercase">
            {hotspot.category}
          </span>
        </div>

        <h3 className="text-xl font-light tracking-wide text-white mb-2 uppercase">
          {hotspot.title}
        </h3>

        <p className="text-xs text-apex-silver leading-relaxed mb-4">
          {hotspot.summary}
        </p>

        <div className="space-y-2 border-t border-white/10 pt-3">
          {hotspot.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-[11px] text-apex-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-apex-copper shrink-0 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-widest text-apex-metal">
          <span>APEX TELEMETRY SYSTEM</span>
          <span className="text-apex-copper">STATUS: ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
