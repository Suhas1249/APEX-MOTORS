'use client';

import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { HOTSPOTS, HotspotItem } from '@/lib/constants/hotspotsData';

interface VehicleHotspotsProps {
  onSelectHotspot: (hotspot: HotspotItem) => void;
  activeHotspotId?: string;
  visible?: boolean;
}

export function VehicleHotspots({
  onSelectHotspot,
  activeHotspotId,
  visible = true,
}: VehicleHotspotsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!visible) return null;

  return (
    <group name="vehicle-hotspots-group">
      {HOTSPOTS.map((spot) => {
        const isHovered = hoveredId === spot.id;
        const isActive = activeHotspotId === spot.id;

        return (
          <group key={spot.id} position={spot.position}>
            <Html center distanceFactor={8} zIndexRange={[10, 0]}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectHotspot(spot);
                }}
                onMouseEnter={() => setHoveredId(spot.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex items-center justify-center p-2 focus:outline-none cursor-pointer select-none"
                aria-label={`View ${spot.title} details`}
              >
                {/* Outer animated pulse ring */}
                <span
                  className={`absolute w-8 h-8 rounded-full border transition-all duration-300 ${
                    isActive || isHovered
                      ? 'border-apex-copper scale-125 bg-apex-copper/20 animate-ping'
                      : 'border-white/40 scale-100 bg-white/5 group-hover:border-apex-copper group-hover:scale-110'
                  }`}
                />

                {/* Center dot */}
                <span
                  className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive || isHovered
                      ? 'bg-apex-copper shadow-copper-glow'
                      : 'bg-white group-hover:bg-apex-copper'
                  }`}
                />

                {/* Floating tooltip preview on hover */}
                {(isHovered || isActive) && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-apex-surface/95 backdrop-blur-md border border-white/20 px-3 py-1.5 whitespace-nowrap shadow-xl pointer-events-none transition-all">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-apex-copper block font-semibold">
                      {spot.category}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-white font-medium">
                      {spot.title}
                    </span>
                  </div>
                )}
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
