'use client';

import React from 'react';
import * as THREE from 'three';

interface StudioRigProps {
  headlightsOn?: boolean;
}

export function StudioRig({ headlightsOn = true }: StudioRigProps) {
  return (
    <group name="studio-lighting-rig">
      {/* Ambient Fill: very subtle to preserve deep automotive contrast */}
      <ambientLight intensity={0.25} color="#dbe4ee" />

      {/* Main Overhead Softbox: wide area light creating the signature roof & hood specular strip */}
      <directionalLight
        position={[0, 8, 0]}
        intensity={1.2}
        color="#ffffff"
      />

      {/* Front Key Light: angled at 45 degrees, casts crisp contact shadows under chassis */}
      <directionalLight
        position={[5, 4, 4]}
        intensity={1.6}
        color="#f2f5fa"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-bias={-0.0001}
      />

      {/* Driver-Side Rim Light: sharp, cool silver rim light accentuating the shoulder curve */}
      <directionalLight
        position={[-6, 3, -4]}
        intensity={2.0}
        color="#d0dded"
      />

      {/* Passenger-Side Rim Light: warm copper accent light for subtle luxury brand signature */}
      <directionalLight
        position={[6, 2.5, -4]}
        intensity={1.1}
        color="#b86b3e"
      />

      {/* Subtle Underbody Floor Bounce */}
      <directionalLight
        position={[0, -2, 0]}
        intensity={0.2}
        color="#505050"
      />

      {/* Active Headlight Spotlights when headlights are toggled on */}
      {headlightsOn && (
        <group position={[2.2, 0.6, 0]}>
          <spotLight
            position={[0, 0, 0.7]}
            target-position={[10, 0, 0.7]}
            intensity={4.0}
            angle={0.45}
            penumbra={0.6}
            color="#e8f4ff"
            distance={25}
          />
          <spotLight
            position={[0, 0, -0.7]}
            target-position={[10, 0, -0.7]}
            intensity={4.0}
            angle={0.45}
            penumbra={0.6}
            color="#e8f4ff"
            distance={25}
          />
        </group>
      )}
    </group>
  );
}
