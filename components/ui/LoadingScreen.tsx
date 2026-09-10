'use client';

import React, { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants/brand';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 400);
          return 100;
        }
        // Accelerating progress curve
        const step = Math.max(2, Math.floor((100 - prev) * 0.15));
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-apex-void transition-opacity duration-700 select-none ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-md w-full px-8 flex flex-col items-center text-center space-y-6">
        {/* Brand Wordmark */}
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-light tracking-[0.3em] text-white font-sans">
            APEX
          </span>
          <span className="text-[10px] tracking-[0.45em] text-apex-copper uppercase -mt-1 font-medium">
            MOTORS
          </span>
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-apex-copper animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] text-apex-muted uppercase">
            INITIALIZING DIGITAL STUDIO
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-apex-copper to-white transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Counter */}
        <div className="text-[11px] font-mono tracking-widest text-apex-metal">
          {progress.toString().padStart(3, '0')} %
        </div>

        <span className="text-[9px] tracking-[0.25em] text-apex-muted/50 uppercase">
          {BRAND.tagline}
        </span>
      </div>
    </div>
  );
}
