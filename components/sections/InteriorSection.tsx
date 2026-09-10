import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Radio, Shield, Sparkles } from 'lucide-react';

export function InteriorSection() {
  const cabinFeatures = [
    {
      title: 'AR HUD HORIZON',
      category: 'OPTICAL HUD',
      description:
        'A full-windshield augmented-reality display projecting dynamic apex lines, trajectory vectors, and braking cones onto the asphalt.',
    },
    {
      title: 'AEROSPACE MONOCOQUE SEATING',
      category: 'ERGONOMICS',
      description:
        'Dual-density active bolstering with 18-way pneumatic micro-adjustment, lined in technical vegetable-tanned microfiber.',
    },
    {
      title: 'ACOUSTIC CANOPY SHIELD',
      category: 'ACOUSTICS',
      description:
        'Double-paned laminated glasshouse with dynamic anti-phase noise cancellation delivering library silence at 200 km/h.',
    },
  ];

  return (
    <section
      id="interior"
      data-section="interior"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Sanctuary of Control"
            title="The Cockpit Environment."
            subtitle="An intimate architectural command center stripped of clutter. Every haptic switch and digital horizon serves the single purpose of driver focus."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
          {cabinFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="apex-surface apex-surface-hover p-8 border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-apex-copper font-medium">
                  {feat.category}
                </span>
                <span className="text-[10px] font-mono text-apex-metal">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-light tracking-wide text-white uppercase">
                {feat.title}
              </h3>

              <p className="text-xs text-apex-muted leading-relaxed font-light">
                {feat.description}
              </p>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[10px] tracking-widest text-apex-metal">
                <Sparkles className="w-3 h-3 text-apex-copper" />
                <span>COPPER AMBIENT ILLUMINATION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
