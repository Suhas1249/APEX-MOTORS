export interface CarColorOption {
  id: string;
  name: string;
  hex: string;
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  description: string;
}

export const CAR_COLORS: CarColorOption[] = [
  {
    id: 'graphite',
    name: 'Graphite Black',
    hex: '#161616',
    metalness: 0.85,
    roughness: 0.18,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    description: 'Triple-layer deep metallic graphite with Obsidian clearcoat',
  },
  {
    id: 'titanium',
    name: 'Titanium Silver',
    hex: '#9e9e9e',
    metalness: 0.92,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    description: 'Liquid metallic brushed titanium with high-specular reflective luster',
  },
  {
    id: 'copper',
    name: 'Deep Copper',
    hex: '#b86b3e',
    metalness: 0.82,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    description: 'Refined molten copper metallic with champagne pearl flakes',
  },
];
