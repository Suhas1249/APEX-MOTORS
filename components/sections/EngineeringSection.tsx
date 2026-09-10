'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HOTSPOTS, HotspotItem } from '@/lib/constants/hotspotsData';
import { Cpu, ChevronRight, Check } from 'lucide-react';

interface EngineeringSectionProps {
  onSelectHotspot?: (hotspot: HotspotItem) => void;
  activeHotspotId?: string;
}

export function EngineeringSection({
  onSelectHotspot,
  activeHotspotId,
}: EngineeringSectionProps) {
  const [selectedSpot, setSelectedSpot] = useState<HotspotItem>(HOTSPOTS[0]);

  const handleSelect = (spot: HotspotItem) => {
    setSelectedSpot(spot);
    onSelectHotspot?.(spot);
  };

  return (
    <section
      id="engineering"
      data-section="engineering"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Architectural Integrity"
            title="Structural Precision."
            subtitle="Explore the key engineering innovations engineered into the APEX R1 platform. Click each module to inspect detailed telemetry."
            align="left"
          />
        </div>

        {/* Hotspots & Engineering Callout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Callout Selector List */}
          <div className="lg:col-span-5 space-y-3 pointer-events-auto">
            {HOTSPOTS.map((spot) => {
              const isSelected =
                (activeHotspotId && activeHotspotId === spot.id) ||
                selectedSpot.id === spot.id;

              return (
                <button
                  key={spot.id}
                  onClick={() => handleSelect(spot)}
                  className={`w-full text-left p-5 transition-all duration-300 border-l-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.05] border-l-apex-copper text-white shadow-lg'
                      : 'bg-transparent border-l-white/10 text-apex-muted hover:border-l-white/30 hover:bg-white/[0.02] hover:text-apex-silver'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-apex-copper font-medium block">
                        {spot.category}
                      </span>
                      <h4 className="text-base font-light tracking-wide text-white uppercase mt-0.5">
                        {spot.title}
                      </h4>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected
                          ? 'text-apex-copper translate-x-1'
                          : 'text-white/20'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Callout Telemetry Box */}
          <div className="lg:col-span-7 pointer-events-auto">
            <div className="apex-surface p-8 md:p-10 border border-white/10 relative">
              <div className="flex items-center gap-2 text-xs tracking-widest text-apex-copper uppercase mb-3">
                <Cpu className="w-4 h-4" />
                <span>ACTIVE INSPECTION // {selectedSpot.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white uppercase tracking-wide mb-3">
                {selectedSpot.title}
              </h3>

              <p className="text-sm text-apex-silver font-light leading-relaxed mb-6">
                {selectedSpot.summary}
              </p>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <span className="text-[10px] tracking-widest uppercase text-apex-metal block">
                  TECHNICAL SPECIFICATION HIGHLIGHTS:
                </span>
                {selectedSpot.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-apex-muted">
                    <span className="p-1 rounded-full bg-apex-copper/10 text-apex-copper mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-widest text-apex-metal">
                <span>CAD BENCHMARK: ISO-9001 AEROSPACE GRADE</span>
                <span className="text-apex-copper">HOTSPOT LINKED IN 3D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
