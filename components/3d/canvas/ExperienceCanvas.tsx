'use client';

import React, { useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { isWebGLAvailable } from '@/lib/utilities/webglCheck';
import { FallbackView } from './FallbackView';
import { StudioScene } from '../scenes/StudioScene';
import { CarColorOption, CAR_COLORS } from '@/lib/constants/colors';
import { HotspotItem } from '@/lib/constants/hotspotsData';

interface ExperienceCanvasProps {
  activeColor?: CarColorOption;
  headlightsOn?: boolean;
  cameraPosition?: [number, number, number];
  lookAtTarget?: [number, number, number];
  vehicleRotationY?: number;
  autoRotate?: boolean;
  showHotspots?: boolean;
  activeHotspotId?: string;
  onSelectHotspot?: (hotspot: HotspotItem) => void;
  className?: string;
}

class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.warn('3D Experience Canvas encountered an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function ExperienceCanvas({
  activeColor = CAR_COLORS[0],
  headlightsOn = true,
  cameraPosition = [4.8, 1.6, 3.8],
  lookAtTarget = [0, 0.5, 0],
  vehicleRotationY = 0,
  autoRotate = false,
  showHotspots = false,
  activeHotspotId,
  onSelectHotspot,
  className = '',
}: ExperienceCanvasProps) {
  const [webglSupported, setWebglSupported] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (!isClient) {
    // Return subtle SSR loading backdrop
    return <div className="w-full h-full bg-apex-void" />;
  }

  if (!webglSupported) {
    return (
      <FallbackView
        colorHex={activeColor.hex}
        colorName={activeColor.name}
      />
    );
  }

  return (
    <CanvasErrorBoundary
      fallback={
        <FallbackView
          colorHex={activeColor.hex}
          colorName={activeColor.name}
        />
      }
    >
      <div className={`w-full h-full ${className}`}>
        <Canvas
          shadows
          camera={{
            fov: 40,
            position: cameraPosition,
            near: 0.1,
            far: 100,
          }}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.15,
            powerPreference: 'high-performance',
          }}
          dpr={[1, typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.75) : 1]}
        >
          <Suspense fallback={null}>
            <StudioScene
              colorConfig={activeColor}
              headlightsOn={headlightsOn}
              cameraPosition={cameraPosition}
              lookAtTarget={lookAtTarget}
              vehicleRotationY={vehicleRotationY}
              autoRotate={autoRotate}
              showHotspots={showHotspots}
              activeHotspotId={activeHotspotId}
              onSelectHotspot={onSelectHotspot}
            />
          </Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
