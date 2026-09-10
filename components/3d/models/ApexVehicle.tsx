'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { CarColorOption } from '@/lib/constants/colors';
import { ProceduralApexR1 } from './ProceduralApexR1';
import { createCarMaterials } from './VehicleMaterials';

interface ApexVehicleProps {
  colorConfig: CarColorOption;
  headlightsOn?: boolean;
  enableAutoRotate?: boolean;
  rotationY?: number;
  customGlbPath?: string;
}

// Subcomponent that loads custom GLB model when explicitly requested
function GlbModelLoader({
  path,
  colorConfig,
  headlightsOn,
}: {
  path: string;
  colorConfig: CarColorOption;
  headlightsOn: boolean;
}) {
  const gltf = useGLTF(path) as any;

  const materials = useMemo(
    () => createCarMaterials(colorConfig, headlightsOn),
    [colorConfig, headlightsOn]
  );

  useEffect(() => {
    if (!gltf?.scene) return;

    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || '').toLowerCase();
        if (name.includes('paint') || name.includes('body') || name.includes('car_paint')) {
          child.material = materials.paint;
        } else if (name.includes('glass') || name.includes('window') || name.includes('windshield')) {
          child.material = materials.glass;
        } else if (name.includes('rim') || name.includes('wheel_alloy')) {
          child.material = materials.rim;
        } else if (name.includes('caliper')) {
          child.material = materials.caliper;
        } else if (name.includes('carbon') || name.includes('diffuser')) {
          child.material = materials.carbon;
        } else if (name.includes('tire') || name.includes('rubber')) {
          child.material = materials.tire;
        } else if (name.includes('headlight')) {
          child.material = materials.headlight;
        } else if (name.includes('taillight')) {
          child.material = materials.taillight;
        }
      }
    });
  }, [gltf, materials]);

  if (!gltf?.scene) return null;

  return <primitive object={gltf.scene} scale={1} />;
}

export function ApexVehicle({
  colorConfig,
  headlightsOn = true,
  enableAutoRotate = false,
  rotationY = 0,
  customGlbPath,
}: ApexVehicleProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Smooth frame loop rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      if (enableAutoRotate) {
        groupRef.current.rotation.y += delta * 0.08;
      } else {
        // Damped interpolation to target rotationY from scroll/controller
        groupRef.current.rotation.y = THREE.MathUtils.damp(
          groupRef.current.rotation.y,
          rotationY,
          4,
          delta
        );
      }
    }
  });

  return (
    <group ref={groupRef} name="apex-vehicle-root">
      {customGlbPath ? (
        <React.Suspense
          fallback={
            <ProceduralApexR1
              colorConfig={colorConfig}
              headlightsOn={headlightsOn}
            />
          }
        >
          <GlbModelLoader
            path={customGlbPath}
            colorConfig={colorConfig}
            headlightsOn={headlightsOn}
          />
        </React.Suspense>
      ) : (
        <ProceduralApexR1
          colorConfig={colorConfig}
          headlightsOn={headlightsOn}
        />
      )}
    </group>
  );
}
