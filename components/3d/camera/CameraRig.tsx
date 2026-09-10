'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

interface CameraRigProps {
  targetPosition?: [number, number, number];
  lookAtTarget?: [number, number, number];
  enableParallax?: boolean;
}

export function CameraRig({
  targetPosition = [4.8, 1.6, 3.8],
  lookAtTarget = [0, 0.5, 0],
  enableParallax = true,
}: CameraRigProps) {
  const { camera, pointer } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(...lookAtTarget));
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      reducedMotion.current = mediaQuery.matches;

      const handler = (e: MediaQueryListEvent) => {
        reducedMotion.current = e.matches;
      };
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useFrame((_, delta) => {
    // 1. Mouse parallax offset (damped)
    const parallaxX = enableParallax && !reducedMotion.current ? pointer.x * 0.35 : 0;
    const parallaxY = enableParallax && !reducedMotion.current ? pointer.y * 0.2 : 0;

    const desiredX = targetPosition[0] + parallaxX;
    const desiredY = targetPosition[1] + parallaxY;
    const desiredZ = targetPosition[2];

    // Smoothly damp camera position towards desired coordinates
    camera.position.x = THREE.MathUtils.damp(camera.position.x, desiredX, 3.5, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, desiredY, 3.5, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, desiredZ, 3.5, delta);

    // Smoothly damp camera lookAt target
    currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, lookAtTarget[0], 4, delta);
    currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, lookAtTarget[1], 4, delta);
    currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, lookAtTarget[2], 4, delta);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
