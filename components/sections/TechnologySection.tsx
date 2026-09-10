import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Cpu, Eye, Navigation, Zap } from 'lucide-react';

export function TechnologySection() {
  const techFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-apex-copper" />,
      title: 'APEX ADAPTIVE DRIVE',
      category: 'DYNAMIC TORQUE',
      description:
        'Computes wheel slip 1,000 times per second to distribute instantaneous micro-torque across each individual wheel motor.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-apex-copper" />,
      title: 'NEURAL CHASSIS AI',
      category: 'PREDICTIVE CONTROL',
      description:
        'Analyzes forward road topology through multi-spectral cameras to pre-tension dampers prior to road imperfections.',
    },
    {
      icon: <Eye className="w-5 h-5 text-apex-copper" />,
      title: '360° LIDAR SENSOR RING',
      category: 'SURROUND PERCEPTION',
      description:
        'Flush-mounted solid-state LiDAR array providing continuous 300-meter spherical threat detection in all weather conditions.',
    },
    {
      icon: <Navigation className="w-5 h-5 text-apex-copper" />,
      title: 'VECTOR TORQUE BRAKING',
      category: 'CHASSIS ROTATION',
      description:
        'Applies regenerative negative torque to the inner wheels during apex entry, virtually eliminating understeer.',
    },
  ];

  return (
    <section
      id="technology"
      data-section="technology"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Digital Intelligence"
            title="Sensory Architecture."
            subtitle="Fictional concept technologies engineered to extend driver perception and synthesize effortless precision on road and circuit."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-auto">
          {techFeatures.map((tech, idx) => (
            <div
              key={idx}
              className="apex-surface apex-surface-hover p-6 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white/[0.04] border border-white/10">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-mono text-apex-metal">
                    SYS-0{idx + 1}
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-apex-copper font-medium block mb-1">
                  {tech.category}
                </span>
                <h3 className="text-sm font-medium tracking-wider text-white uppercase mb-2">
                  {tech.title}
                </h3>
                <p className="text-xs text-apex-muted leading-relaxed font-light">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-widest text-apex-metal">
                <span>STATUS: OPERATIONAL</span>
                <span className="text-apex-copper">DEMO READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
