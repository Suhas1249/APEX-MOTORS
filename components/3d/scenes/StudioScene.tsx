'use client';

import React from 'react';
import { ContactShadows } from '@react-three/drei';
import { StudioRig } from '../lighting/StudioRig';
import { ApexVehicle } from '../models/ApexVehicle';
import { VehicleHotspots } from '../models/VehicleHotspots';
import { CameraRig } from '../camera/CameraRig';
import { CarColorOption } from '@/lib/constants/colors';
import { HotspotItem } from '@/lib/constants/hotspotsData';

interface StudioSceneProps {
  colorConfig: CarColorOption;
  headlightsOn?: boolean;
  cameraPosition?: [number, number, number];
  lookAtTarget?: [number, number, number];
  vehicleRotationY?: number;
  autoRotate?: boolean;
  showHotspots?: boolean;
  activeHotspotId?: string;
  onSelectHotspot?: (hotspot: HotspotItem) => void;
}

export function StudioScene({
  colorConfig,
  headlightsOn = true,
  cameraPosition = [4.8, 1.6, 3.8],
  lookAtTarget = [0, 0.5, 0],
  vehicleRotationY = 0,
  autoRotate = false,
  showHotspots = false,
  activeHotspotId,
  onSelectHotspot,
}: StudioSceneProps) {
  return (
    <>
      {/* Studio Lighting */}
      <StudioRig headlightsOn={headlightsOn} />

      {/* Dynamic Camera Control */}
      <CameraRig
        targetPosition={cameraPosition}
        lookAtTarget={lookAtTarget}
        enableParallax={true}
      />

      {/* Vehicle Group */}
      <group position={[0, 0, 0]}>
        <ApexVehicle
          colorConfig={colorConfig}
          headlightsOn={headlightsOn}
          enableAutoRotate={autoRotate}
          rotationY={vehicleRotationY}
        />

        {/* 3D Interactive Hotspot Markers */}
        {onSelectHotspot && (
          <VehicleHotspots
            visible={showHotspots}
            activeHotspotId={activeHotspotId}
            onSelectHotspot={onSelectHotspot}
          />
        )}
      </group>

      {/* Ground Contact Shadow */}
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.88}
        scale={10}
        blur={2.2}
        far={3.5}
        resolution={1024}
        color="#000000"
      />

      {/* Reflective Studio Floor Disc */}
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[16, 64]} />
        <meshStandardMaterial
          color="#070707"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </>
  );
}
