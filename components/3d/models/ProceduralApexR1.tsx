'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';
import { CarColorOption } from '@/lib/constants/colors';
import { createCarMaterials } from './VehicleMaterials';

interface ProceduralApexR1Props {
  colorConfig: CarColorOption;
  headlightsOn?: boolean;
}

export function ProceduralApexR1({
  colorConfig,
  headlightsOn = true,
}: ProceduralApexR1Props) {
  const materials = useMemo(
    () => createCarMaterials(colorConfig, headlightsOn),
    [colorConfig, headlightsOn]
  );

  return (
    <group name="procedural-apex-r1" position={[0, 0, 0]} castShadow receiveShadow>
      {/* ============================================================ */}
      {/* 1. MAIN CHASSIS & LOWER UNDERBODY                            */}
      {/* ============================================================ */}
      <mesh
        position={[0, 0.28, 0]}
        material={materials.carbon}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4.5, 0.16, 1.95]} />
      </mesh>

      {/* Front Carbon Splitter */}
      <mesh
        position={[2.3, 0.2, 0]}
        rotation={[0, 0, -0.05]}
        material={materials.carbon}
        castShadow
      >
        <boxGeometry args={[0.35, 0.05, 1.85]} />
      </mesh>

      {/* Rear Carbon Venturi Diffuser */}
      <mesh
        position={[-2.3, 0.26, 0]}
        rotation={[0, 0, 0.18]}
        material={materials.carbon}
        castShadow
      >
        <boxGeometry args={[0.45, 0.08, 1.9]} />
      </mesh>

      {/* Side Carbon Skirts */}
      <mesh position={[0, 0.22, 1.0]} material={materials.carbon}>
        <boxGeometry args={[2.5, 0.06, 0.08]} />
      </mesh>
      <mesh position={[0, 0.22, -1.0]} material={materials.carbon}>
        <boxGeometry args={[2.5, 0.06, 0.08]} />
      </mesh>

      {/* ============================================================ */}
      {/* 2. SCULPTED BODY SHELL (AERODYNAMIC HOOD, FENDERS, DOORS)    */}
      {/* ============================================================ */}
      {/* Lower Beltline Body Shell */}
      <mesh
        position={[0.1, 0.48, 0]}
        material={materials.paint}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4.2, 0.38, 1.9]} />
      </mesh>

      {/* Sculpted Front Hood: sloping nose cone */}
      <mesh
        position={[1.5, 0.58, 0]}
        rotation={[0, 0, -0.12]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.5, 0.22, 1.84]} />
      </mesh>

      {/* Front Hood Extractor Aero Channel (recessed carbon duct) */}
      <mesh
        position={[1.4, 0.69, 0]}
        rotation={[0, 0, -0.12]}
        material={materials.carbon}
      >
        <boxGeometry args={[0.7, 0.02, 0.7]} />
      </mesh>

      {/* Sculpted Front Left Fender Arch */}
      <mesh
        position={[1.35, 0.54, 0.96]}
        rotation={[0, 0, -0.04]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.2, 0.36, 0.12]} />
      </mesh>

      {/* Sculpted Front Right Fender Arch */}
      <mesh
        position={[1.35, 0.54, -0.96]}
        rotation={[0, 0, -0.04]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.2, 0.36, 0.12]} />
      </mesh>

      {/* Sculpted Rear Left Muscular Haunch */}
      <mesh
        position={[-1.25, 0.62, 0.98]}
        rotation={[0, 0, 0.06]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.3, 0.44, 0.14]} />
      </mesh>

      {/* Sculpted Rear Right Muscular Haunch */}
      <mesh
        position={[-1.25, 0.62, -0.98]}
        rotation={[0, 0, 0.06]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.3, 0.44, 0.14]} />
      </mesh>

      {/* Rear Decklid & Integrated Ducktail Spoiler */}
      <mesh
        position={[-1.65, 0.66, 0]}
        rotation={[0, 0, 0.08]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.1, 0.28, 1.8]} />
      </mesh>

      <mesh
        position={[-2.15, 0.78, 0]}
        rotation={[0, 0, -0.15]}
        material={materials.carbon}
        castShadow
      >
        <boxGeometry args={[0.18, 0.06, 1.76]} />
      </mesh>

      {/* ============================================================ */}
      {/* 3. COCKPIT GREENHOUSE (ROOF & TINTED GLASS)                  */}
      {/* ============================================================ */}
      {/* Roof Monocoque Canopy */}
      <mesh
        position={[-0.2, 1.05, 0]}
        material={materials.paint}
        castShadow
      >
        <boxGeometry args={[1.65, 0.06, 1.34]} />
      </mesh>

      {/* Panoramic Front Windshield */}
      <mesh
        position={[0.75, 0.88, 0]}
        rotation={[0, 0, -0.58]}
        material={materials.glass}
      >
        <boxGeometry args={[0.92, 0.04, 1.38]} />
      </mesh>

      {/* Fastback Rear Window */}
      <mesh
        position={[-1.15, 0.89, 0]}
        rotation={[0, 0, 0.52]}
        material={materials.glass}
      >
        <boxGeometry args={[1.05, 0.04, 1.34]} />
      </mesh>

      {/* Driver Side Window */}
      <mesh
        position={[-0.18, 0.88, 0.7]}
        rotation={[0.1, 0, 0]}
        material={materials.glass}
      >
        <boxGeometry args={[1.45, 0.32, 0.03]} />
      </mesh>

      {/* Passenger Side Window */}
      <mesh
        position={[-0.18, 0.88, -0.7]}
        rotation={[-0.1, 0, 0]}
        material={materials.glass}
      >
        <boxGeometry args={[1.45, 0.32, 0.03]} />
      </mesh>

      {/* ============================================================ */}
      {/* 4. INTERIOR COCKPIT SILHOUETTE                              */}
      {/* ============================================================ */}
      {/* Dashboard Screen */}
      <mesh position={[0.45, 0.74, 0]} material={materials.interior}>
        <boxGeometry args={[0.4, 0.12, 1.1]} />
      </mesh>
      {/* Steering Yoke */}
      <mesh position={[0.2, 0.78, 0.35]} rotation={[0, 0, -0.2]} material={materials.carbon}>
        <torusGeometry args={[0.12, 0.02, 8, 16]} />
      </mesh>
      {/* Driver Sport Seat */}
      <mesh position={[-0.2, 0.72, 0.35]} material={materials.interior}>
        <boxGeometry args={[0.45, 0.45, 0.42]} />
      </mesh>
      {/* Passenger Sport Seat */}
      <mesh position={[-0.2, 0.72, -0.35]} material={materials.interior}>
        <boxGeometry args={[0.45, 0.45, 0.42]} />
      </mesh>

      {/* ============================================================ */}
      {/* 5. LIGHTING SYSTEMS (HEADLIGHTS & TAILLIGHT BLADE)           */}
      {/* ============================================================ */}
      {/* Left Laser Matrix Headlight */}
      <mesh
        position={[2.14, 0.52, 0.65]}
        rotation={[0, 0.25, 0]}
        material={materials.headlight}
      >
        <boxGeometry args={[0.12, 0.04, 0.42]} />
      </mesh>

      {/* Right Laser Matrix Headlight */}
      <mesh
        position={[2.14, 0.52, -0.65]}
        rotation={[0, -0.25, 0]}
        material={materials.headlight}
      >
        <boxGeometry args={[0.12, 0.04, 0.42]} />
      </mesh>

      {/* Full-Width Front DRL Light Strip */}
      <mesh position={[2.18, 0.52, 0]} material={materials.headlight}>
        <boxGeometry args={[0.04, 0.015, 1.5]} />
      </mesh>

      {/* Full-Width Rear Photonic Taillight Blade */}
      <mesh position={[-2.22, 0.67, 0]} material={materials.taillight}>
        <boxGeometry args={[0.04, 0.04, 1.82]} />
      </mesh>

      {/* Rear Aero Diffuser Accent Finishes */}
      <mesh position={[-2.22, 0.25, 0.4]} material={materials.carbon}>
        <boxGeometry args={[0.3, 0.12, 0.04]} />
      </mesh>
      <mesh position={[-2.22, 0.25, -0.4]} material={materials.carbon}>
        <boxGeometry args={[0.3, 0.12, 0.04]} />
      </mesh>

      {/* ============================================================ */}
      {/* 6. WHEEL & BRAKE ASSEMBLIES (4 CORNERS)                      */}
      {/* ============================================================ */}
      {/* Front-Left Wheel */}
      <WheelAssembly
        position={[1.35, 0.35, 0.98]}
        isLeft={true}
        materials={materials}
      />

      {/* Front-Right Wheel */}
      <WheelAssembly
        position={[1.35, 0.35, -0.98]}
        isLeft={false}
        materials={materials}
      />

      {/* Rear-Left Wheel */}
      <WheelAssembly
        position={[-1.35, 0.35, 1.02]}
        isLeft={true}
        materials={materials}
      />

      {/* Rear-Right Wheel */}
      <WheelAssembly
        position={[-1.35, 0.35, -1.02]}
        isLeft={false}
        materials={materials}
      />
    </group>
  );
}

interface WheelAssemblyProps {
  position: [number, number, number];
  isLeft: boolean;
  materials: ReturnType<typeof createCarMaterials>;
}

function WheelAssembly({ position, isLeft, materials }: WheelAssemblyProps) {
  const zRot = isLeft ? Math.PI / 2 : -Math.PI / 2;

  return (
    <group position={position}>
      {/* Tire Rubber */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.tire} castShadow>
        <cylinderGeometry args={[0.36, 0.36, 0.26, 24]} />
      </mesh>

      {/* Turbine Alloy Rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.rim}>
        <cylinderGeometry args={[0.26, 0.26, 0.265, 16]} />
      </mesh>

      {/* Center Wheel Cap with Copper Ring */}
      <mesh
        position={[0, 0, isLeft ? 0.14 : -0.14]}
        rotation={[Math.PI / 2, 0, 0]}
        material={materials.caliper}
      >
        <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
      </mesh>

      {/* Ceramic Brake Rotor */}
      <mesh
        position={[0, 0, isLeft ? -0.02 : 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        material={materials.rotor}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.03, 16]} />
      </mesh>

      {/* Copper Monobloc 6-Piston Caliper */}
      <mesh
        position={[0, 0.16, isLeft ? -0.01 : 0.01]}
        material={materials.caliper}
      >
        <boxGeometry args={[0.16, 0.1, 0.06]} />
      </mesh>
    </group>
  );
}
