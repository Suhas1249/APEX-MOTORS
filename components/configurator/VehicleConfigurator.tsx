'use client';

import React from 'react';
import { CAR_COLORS, CarColorOption } from '@/lib/constants/colors';
import { Sparkles, Palette } from 'lucide-react';

interface VehicleConfiguratorProps {
  activeColor: CarColorOption;
  onSelectColor: (color: CarColorOption) => void;
  className?: string;
}

export function VehicleConfigurator({
  activeColor,
  onSelectColor,
  className = '',
}: VehicleConfiguratorProps) {
  return (
    <div
      className={`apex-surface p-4 sm:p-5 rounded-none border-l-2 border-l-apex-copper backdrop-blur-xl shadow-2xl transition-all select-none pointer-events-auto ${className}`}
    >
      <div className="flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <Palette className="w-3.5 h-3.5 text-apex-copper" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-apex-copper font-medium">
            BESPOKE ATELIER
          </span>
        </div>
        <span className="text-[10px] tracking-wider text-apex-muted uppercase font-mono">
          PBR FINISH
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-apex-muted text-[11px] uppercase tracking-widest">
            FINISH:
          </span>
          <span className="text-white font-medium uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-apex-copper" />
            {activeColor.name}
          </span>
        </div>

        {/* Minimal Circular Selectors */}
        <div className="flex items-center gap-4 pt-1">
          {CAR_COLORS.map((color) => {
            const isSelected = activeColor.id === color.id;

            return (
              <button
                key={color.id}
                type="button"
                onClick={() => onSelectColor(color)}
                className="group flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
                title={color.name}
                aria-label={`Select ${color.name} paint`}
              >
                <span
                  className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 flex items-center justify-center p-0.5 ${
                    isSelected
                      ? 'ring-2 ring-apex-copper ring-offset-2 ring-offset-apex-void scale-110'
                      : 'border border-white/30 hover:border-white/80 hover:scale-105'
                  }`}
                >
                  <span
                    className="w-full h-full rounded-full shadow-inner block"
                    style={{ backgroundColor: color.hex }}
                  />
                </span>
                <span
                  className={`text-[9px] uppercase tracking-wider transition-colors ${
                    isSelected ? 'text-apex-copper font-medium' : 'text-apex-metal group-hover:text-white'
                  }`}
                >
                  {color.id}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-apex-metal/80 leading-relaxed pt-1">
          {activeColor.description}
        </p>
      </div>
    </div>
  );
}
