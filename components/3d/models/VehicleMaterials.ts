import * as THREE from 'three';
import { CarColorOption } from '@/lib/constants/colors';

export function createCarMaterials(colorConfig: CarColorOption, headlightsOn = true) {
  // 1. High-Performance Automotive Clearcoat Body Paint
  const paintMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(colorConfig.hex),
    metalness: colorConfig.metalness,
    roughness: colorConfig.roughness,
    clearcoat: colorConfig.clearcoat,
    clearcoatRoughness: colorConfig.clearcoatRoughness,
    reflectivity: 0.9,
    envMapIntensity: 1.2,
  });

  // 2. Double-Glazed Privacy Glass with subtle blue-grey tint
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#0a1018'),
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.85,
    thickness: 0.5,
    ior: 1.52,
    transparent: true,
    opacity: 0.75,
  });

  // 3. Autoclaved Pre-Preg Carbon Fiber
  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#141414'),
    metalness: 0.3,
    roughness: 0.55,
    envMapIntensity: 0.8,
  });

  // 4. Forged Aluminum Wheel Rims
  const wheelRimMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#b5b5b5'),
    metalness: 0.9,
    roughness: 0.18,
    envMapIntensity: 1.5,
  });

  // 5. Monobloc 6-Piston Calipers in Signature Heat Copper
  const caliperMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#b86b3e'),
    metalness: 0.85,
    roughness: 0.25,
  });

  // 6. Cross-Drilled Carbon Ceramic Rotor
  const rotorMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#383838'),
    metalness: 0.7,
    roughness: 0.4,
  });

  // 7. High-Grip Low-Profile Tire Rubber
  const tireMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0e0e0e'),
    metalness: 0.05,
    roughness: 0.92,
  });

  // 8. Photonic Laser Matrix Headlights
  const headlightEmissiveMaterial = new THREE.MeshStandardMaterial({
    color: headlightsOn ? new THREE.Color('#ffffff') : new THREE.Color('#222222'),
    emissive: headlightsOn ? new THREE.Color('#d4e8ff') : new THREE.Color('#000000'),
    emissiveIntensity: headlightsOn ? 3.5 : 0,
    toneMapped: false,
  });

  // 9. Rear Optical Taillight Blade
  const taillightEmissiveMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ff1824'),
    emissive: new THREE.Color('#ff0d1a'),
    emissiveIntensity: 3.0,
    toneMapped: false,
  });

  // 10. Cockpit Microfiber & Copper Accent
  const interiorMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#1c1c1e'),
    metalness: 0.2,
    roughness: 0.8,
  });

  return {
    paint: paintMaterial,
    glass: glassMaterial,
    carbon: carbonMaterial,
    rim: wheelRimMaterial,
    caliper: caliperMaterial,
    rotor: rotorMaterial,
    tire: tireMaterial,
    headlight: headlightEmissiveMaterial,
    taillight: taillightEmissiveMaterial,
    interior: interiorMaterial,
  };
}
