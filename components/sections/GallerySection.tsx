'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Maximize2, Sparkles, Camera } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  desc: string;
  gradient: string;
}

export function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'FRONT STANCE & AERO NOSE',
      category: 'EXTERIOR ARCHITECTURE',
      aspect: 'col-span-1 md:col-span-2 row-span-1',
      desc: 'Low-slung predatory stance featuring continuous bonnet ducting and sharp front chin splitter.',
      gradient: 'from-zinc-900 via-neutral-950 to-black',
    },
    {
      id: 'g2',
      title: 'PHOTONIC MATRIX OPTICS',
      category: 'LIGHTING SIGNATURE',
      aspect: 'col-span-1 row-span-1',
      desc: 'Laser-etched micro-reflector lenses embedded into autoclaved pre-preg carbon housings.',
      gradient: 'from-[#141210] via-neutral-950 to-black',
    },
    {
      id: 'g3',
      title: '21" FORGED TURBINE WHEEL',
      category: 'CHASSIS DYNAMICS',
      aspect: 'col-span-1 row-span-1',
      desc: 'Aero blade directional spokes finished in brushed titanium with copper monobloc calipers.',
      gradient: 'from-neutral-900 via-zinc-950 to-black',
    },
    {
      id: 'g4',
      title: 'REAR VENTURI DIFFUSER',
      category: 'GROUND EFFECT',
      aspect: 'col-span-1 md:col-span-2 row-span-1',
      desc: 'Massive dual underbody venturi tunnels framing a continuous horizontal photon blade.',
      gradient: 'from-[#18110b] via-neutral-950 to-black',
    },
    {
      id: 'g5',
      title: 'DIGITAL COCKPIT HORIZON',
      category: 'INTERIOR SANCTUARY',
      aspect: 'col-span-1 md:col-span-3 row-span-1',
      desc: 'Minimalist driver sanctuary with floating OLED telemetry and tactile copper haptic selectors.',
      gradient: 'from-zinc-900 via-neutral-950 to-black',
    },
  ];

  return (
    <section
      id="gallery"
      data-section="gallery"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Cinematic Archive"
            title="Visual Perspectives."
            subtitle="Studio captures and detail studies examining the interplay of carbon composite, glass, and light."
            align="left"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`apex-surface apex-surface-hover relative p-8 group cursor-pointer overflow-hidden border border-white/10 ${item.aspect}`}
            >
              {/* Abstract studio background with luxury lighting */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`}
              />

              {/* Architectural grid overlay lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Ambient copper corner glow on hover */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-apex-copper/10 rounded-full blur-2xl group-hover:bg-apex-copper/25 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-apex-copper font-medium">
                    {item.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-apex-metal group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-light tracking-wide text-white uppercase font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-apex-muted font-light leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for active gallery inspection */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 pointer-events-auto animate-in fade-in duration-300"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="apex-surface p-8 max-w-2xl w-full border-l-2 border-l-apex-copper shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-apex-copper" />
                <span className="text-xs uppercase tracking-[0.3em] text-apex-copper font-medium">
                  {activeItem.category}
                </span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="text-xs text-apex-muted hover:text-white uppercase tracking-widest px-2 py-1 border border-white/10"
              >
                Close [ESC]
              </button>
            </div>

            <div className="h-64 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="text-center space-y-2 relative z-10">
                <Sparkles className="w-8 h-8 text-apex-copper mx-auto animate-pulse" />
                <span className="text-xs tracking-[0.3em] uppercase text-white font-mono block">
                  APEX R1 // ARCHITECTURAL STUDY
                </span>
                <span className="text-[10px] tracking-widest uppercase text-apex-metal">
                  3D CAD BENCHMARK RENDER
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light uppercase text-white tracking-wide mb-2">
                {activeItem.title}
              </h3>
              <p className="text-xs text-apex-silver leading-relaxed font-light">
                {activeItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
