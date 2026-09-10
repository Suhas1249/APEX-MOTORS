'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ExperienceCanvas } from '@/components/3d/canvas/ExperienceCanvas';
import { HeroOverlay } from '@/components/hero/HeroOverlay';
import { DesignSection } from '@/components/sections/DesignSection';
import { ModelsSection } from '@/components/sections/ModelsSection';
import { PerformanceSection } from '@/components/sections/PerformanceSection';
import { EngineeringSection } from '@/components/sections/EngineeringSection';
import { InteriorSection } from '@/components/sections/InteriorSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestDriveSection } from '@/components/sections/TestDriveSection';
import { VehicleConfigurator } from '@/components/configurator/VehicleConfigurator';
import { HotspotModal } from '@/components/ui/HotspotModal';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CAR_COLORS, CarColorOption } from '@/lib/constants/colors';
import { HotspotItem } from '@/lib/constants/hotspotsData';
import { STORY_STAGES, StoryStage } from '@/lib/animations/scrollStory';
import { gsap, ScrollTrigger } from '@/lib/animations/gsapSetup';

export default function HomePage() {
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [activeColor, setActiveColor] = useState<CarColorOption>(CAR_COLORS[0]);
  const [activeHotspot, setActiveHotspot] = useState<HotspotItem | null>(null);
  const [currentStage, setCurrentStage] = useState<StoryStage>(STORY_STAGES.hero);
  const [mobileConfigOpen, setMobileConfigOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize ScrollTrigger with 3D Camera coordinates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = [
      { id: 'hero', stage: STORY_STAGES.hero },
      { id: 'design', stage: STORY_STAGES.design },
      { id: 'models', stage: STORY_STAGES.models },
      { id: 'performance', stage: STORY_STAGES.performance },
      { id: 'engineering', stage: STORY_STAGES.engineering },
      { id: 'interior', stage: STORY_STAGES.interior },
      { id: 'technology', stage: STORY_STAGES.technology },
      { id: 'gallery', stage: STORY_STAGES.gallery },
      { id: 'test-drive', stage: STORY_STAGES['test-drive'] },
    ];

    const triggers: ScrollTrigger[] = [];

    sections.forEach(({ id, stage }) => {
      const el = document.getElementById(id);
      if (el) {
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setCurrentStage(stage),
          onEnterBack: () => setCurrentStage(stage),
        });
        triggers.push(trigger);
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-apex-void text-apex-text selection:bg-apex-copper/30 overflow-x-hidden"
    >
      {/* 1. Cinematic Loading Experience */}
      <LoadingScreen />

      {/* 2. Fixed Luxury Navigation Bar */}
      <Navbar />

      {/* 3. Fixed Full-Screen 3D Studio Canvas Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ExperienceCanvas
          activeColor={activeColor}
          headlightsOn={headlightsOn}
          cameraPosition={currentStage.cameraPosition}
          lookAtTarget={currentStage.lookAtTarget}
          vehicleRotationY={currentStage.vehicleRotationY}
          showHotspots={currentStage.showHotspots}
          activeHotspotId={activeHotspot?.id}
          onSelectHotspot={(spot) => setActiveHotspot(spot)}
        />
      </div>

      {/* 4. Floating Luxury Color Configurator */}
      {/* Desktop fixed display */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:block max-w-xs">
        <VehicleConfigurator
          activeColor={activeColor}
          onSelectColor={(color) => setActiveColor(color)}
        />
      </div>

      {/* Mobile atelier toggle button */}
      <div className="fixed bottom-6 left-6 z-30 md:hidden pointer-events-auto">
        <button
          onClick={() => setMobileConfigOpen((prev) => !prev)}
          className="apex-surface px-3.5 py-2 border-l-2 border-l-apex-copper text-[10px] uppercase tracking-widest text-white flex items-center gap-2 shadow-2xl cursor-pointer"
          aria-label="Toggle mobile paint configurator"
        >
          <span
            className="w-2.5 h-2.5 rounded-full ring-1 ring-white/50"
            style={{ backgroundColor: activeColor.hex }}
          />
          <span>{mobileConfigOpen ? 'CLOSE ATELIER' : 'ATELIER FINISH'}</span>
        </button>

        {mobileConfigOpen && (
          <div className="absolute bottom-12 left-0 w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-200">
            <VehicleConfigurator
              activeColor={activeColor}
              onSelectColor={(color) => {
                setActiveColor(color);
                setMobileConfigOpen(false);
              }}
            />
          </div>
        )}
      </div>

      {/* 5. Floating 3D Hotspot Inspection Modal */}
      <HotspotModal
        hotspot={activeHotspot}
        onClose={() => setActiveHotspot(null)}
      />

      {/* 6. Continuous Narrative Sections Layer */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <div id="hero">
          <HeroOverlay
            headlightsOn={headlightsOn}
            onToggleHeadlights={() => setHeadlightsOn((prev) => !prev)}
          />
        </div>

        {/* Section 02: Design */}
        <DesignSection />

        {/* Section 03: Models */}
        <ModelsSection />

        {/* Section 04: Performance */}
        <PerformanceSection />

        {/* Section 05: Engineering */}
        <EngineeringSection
          activeHotspotId={activeHotspot?.id}
          onSelectHotspot={(spot) => setActiveHotspot(spot)}
        />

        {/* Section 06: Interior */}
        <InteriorSection />

        {/* Section 07: Technology */}
        <TechnologySection />

        {/* Section 08: Gallery */}
        <GallerySection />

        {/* Section 09: Test Drive */}
        <TestDriveSection />
      </main>

      {/* 7. Footer with AURAWEBS Portfolio Credit */}
      <Footer />
    </div>
  );
}
