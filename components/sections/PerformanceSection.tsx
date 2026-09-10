import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MetricCounter } from '@/components/ui/MetricCounter';
import { Gauge, Zap, Timer, Flame } from 'lucide-react';

export function PerformanceSection() {
  return (
    <section
      id="performance"
      data-section="performance"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Header */}
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Dynamic Telemetry"
            title="Instantaneous Velocity."
            subtitle="Engineered with dual permanent-magnet synchronous motors and intelligent torque vectoring at all four corners."
            align="left"
          />
        </div>

        {/* Large Typography Metric Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
          {/* Metric 1: Horsepower */}
          <div className="apex-surface apex-surface-hover p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-apex-copper/5 rounded-full blur-3xl group-hover:bg-apex-copper/15 transition-all" />
            <div className="flex items-center gap-2 text-apex-copper text-xs tracking-widest uppercase mb-4">
              <Zap className="w-4 h-4" />
              <span>PEAK POWER</span>
            </div>
            <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-white font-sans tracking-tight mb-2">
              <MetricCounter end={520} />
              <span className="text-3xl sm:text-4xl text-apex-copper font-sans ml-2">
                HP
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-apex-silver block">
              Dual Vectoring Motors
            </span>
            <p className="text-xs text-apex-muted mt-4 leading-relaxed">
              Instant peak torque delivery without rotational latency or thermal throttling across continuous hot laps.
            </p>
          </div>

          {/* Metric 2: Acceleration */}
          <div className="apex-surface apex-surface-hover p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-apex-copper/5 rounded-full blur-3xl group-hover:bg-apex-copper/15 transition-all" />
            <div className="flex items-center gap-2 text-apex-copper text-xs tracking-widest uppercase mb-4">
              <Timer className="w-4 h-4" />
              <span>ACCELERATION 0–100 KM/H</span>
            </div>
            <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-white font-sans tracking-tight mb-2">
              <MetricCounter end={3.4} decimals={1} />
              <span className="text-3xl sm:text-4xl text-apex-copper font-sans ml-2">
                SEC
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-apex-silver block">
              Sub-4 Second Club
            </span>
            <p className="text-xs text-apex-muted mt-4 leading-relaxed">
              Launch-control launch sequencing paired with active pneumatic downforce surfaces to pin the contact patches.
            </p>
          </div>

          {/* Metric 3: Top Speed */}
          <div className="apex-surface apex-surface-hover p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-apex-copper/5 rounded-full blur-3xl group-hover:bg-apex-copper/15 transition-all" />
            <div className="flex items-center gap-2 text-apex-copper text-xs tracking-widest uppercase mb-4">
              <Gauge className="w-4 h-4" />
              <span>TERMINAL VELOCITY</span>
            </div>
            <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-white font-sans tracking-tight mb-2">
              <MetricCounter end={320} />
              <span className="text-3xl sm:text-4xl text-apex-copper font-sans ml-2">
                KM/H
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-apex-silver block">
              Governed Track Velocity
            </span>
            <p className="text-xs text-apex-muted mt-4 leading-relaxed">
              High-efficiency two-speed planetary gearset designed for continuous high-speed Autobahn endurance.
            </p>
          </div>
        </div>

        {/* Fictional Spec Notice Badge */}
        <div className="pointer-events-auto flex items-center gap-3 text-[10px] tracking-widest uppercase text-apex-metal/80 border-t border-white/10 pt-4">
          <Flame className="w-3.5 h-3.5 text-apex-copper" />
          <span>SIMULATED CONCEPT TELEMETRY // BENCHMARK VERIFIED UNDER DEMO CONDITIONS</span>
        </div>
      </div>
    </section>
  );
}
