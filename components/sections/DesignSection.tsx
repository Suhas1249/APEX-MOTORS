import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Wind, Eye, Compass, Shield } from 'lucide-react';

export function DesignSection() {
  const highlights = [
    {
      icon: <Wind className="w-5 h-5 text-apex-copper" />,
      title: 'AERO CONTOURS',
      description:
        'Continuous fluid surface modeling channels turbulent boundary air directly into the rear venturi negative pressure tunnels.',
    },
    {
      icon: <Eye className="w-5 h-5 text-apex-copper" />,
      title: 'PHOTONIC SIGNATURE',
      description:
        'Ultra-slim 84-sector matrix LEDs establish a razor-thin frontal stance with active beam modulation.',
    },
    {
      icon: <Compass className="w-5 h-5 text-apex-copper" />,
      title: 'MONOCOQUE POISE',
      description:
        'Low center of gravity achieved through sub-floor integrated solid-state cells and an autoclaved carbon spine.',
    },
    {
      icon: <Shield className="w-5 h-5 text-apex-copper" />,
      title: 'TACTILE FINISHES',
      description:
        'Refined triple-stage metallic lacquers paired with matte carbon aero elements for heightened sculptural drama.',
    },
  ];

  return (
    <section
      id="design"
      data-section="design"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="lg:col-span-5 space-y-6 pointer-events-auto">
          <SectionHeader
            eyebrow="Aesthetic Philosophy"
            title="Designed with Intent."
            subtitle="Every curve serves a thermodynamic purpose. Every crease guides aerodynamic energy to sustain balance at extraordinary velocities."
          />

          <div className="p-5 border-l-2 border-l-apex-copper bg-white/[0.02] backdrop-blur-md">
            <span className="text-[10px] tracking-[0.25em] text-apex-copper uppercase font-medium block mb-1">
              DESIGN MANIFESTO
            </span>
            <p className="text-xs text-apex-silver leading-relaxed italic">
              &ldquo;We rejected superfluous ornament. In its place, we sculpted velocity.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: Architectural Highlights Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="apex-surface apex-surface-hover p-6 rounded-none space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-white/[0.04] border border-white/10">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-apex-metal">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-sm font-medium tracking-widest text-white uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-apex-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
