'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { APEX_MODELS, ApexModel } from '@/lib/constants/modelsData';
import { ArrowUpRight, Gauge, Zap, Activity } from 'lucide-react';

export function ModelsSection() {
  const [selectedModel, setSelectedModel] = useState<ApexModel>(APEX_MODELS[0]);

  return (
    <section
      id="models"
      data-section="models"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="pointer-events-auto">
          <SectionHeader
            eyebrow="Portfolio of Machines"
            title="The Apex Fleet."
            subtitle="Three distinct architectural expressions of electric grand touring and circuit-bred performance."
            align="left"
          />
        </div>

        {/* Model Tabs & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Model Selector Tabs */}
          <div className="lg:col-span-4 space-y-3 pointer-events-auto">
            {APEX_MODELS.map((model) => {
              const isSelected = selectedModel.id === model.id;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={`w-full text-left p-6 transition-all duration-300 border-l-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.05] border-l-apex-copper text-white shadow-lg'
                      : 'bg-transparent border-l-white/10 text-apex-muted hover:border-l-white/30 hover:bg-white/[0.02] hover:text-apex-silver'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl font-light tracking-widest uppercase font-sans">
                      {model.name}
                    </span>
                    <span className="text-[10px] tracking-widest text-apex-copper uppercase">
                      {model.power}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-apex-metal block">
                    {model.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Model Telemetry Card */}
          <div className="lg:col-span-8 pointer-events-auto">
            <div className="apex-surface p-8 md:p-10 border border-white/10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-apex-copper font-medium block">
                    {selectedModel.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-light tracking-wide text-white uppercase mt-1">
                    {selectedModel.name}
                  </h3>
                </div>
                <Button
                  variant="copper"
                  size="md"
                  asLink
                  href="#test-drive"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Configure & Inquire
                </Button>
              </div>

              <p className="text-sm text-apex-silver font-light leading-relaxed max-w-2xl">
                {selectedModel.description}
              </p>

              {/* Spec Telemetry Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-apex-copper text-xs mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-widest uppercase">OUTPUT</span>
                  </div>
                  <span className="text-2xl font-light text-white font-mono">
                    {selectedModel.power}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-apex-copper text-xs mb-1">
                    <Activity className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-widest uppercase">0-100 KM/H</span>
                  </div>
                  <span className="text-2xl font-light text-white font-mono">
                    {selectedModel.acceleration}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-apex-copper text-xs mb-1">
                    <Gauge className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-widest uppercase">MAX VELOCITY</span>
                  </div>
                  <span className="text-2xl font-light text-white font-mono">
                    {selectedModel.topSpeed}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-apex-copper text-xs mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-widest uppercase">EST. RANGE</span>
                  </div>
                  <span className="text-2xl font-light text-white font-mono">
                    {selectedModel.range}
                  </span>
                </div>
              </div>

              <div className="text-[10px] tracking-widest text-apex-metal flex items-center gap-3 pt-2">
                <span className="w-2 h-2 rounded-full bg-apex-copper" />
                <span>DRIVETRAIN ARCHITECTURE: {selectedModel.drivetrain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
