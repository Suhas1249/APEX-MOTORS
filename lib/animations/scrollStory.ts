export interface StoryStage {
  id: string;
  cameraPosition: [number, number, number];
  lookAtTarget: [number, number, number];
  vehicleRotationY: number;
  showHotspots: boolean;
}

export const STORY_STAGES: Record<string, StoryStage> = {
  hero: {
    id: 'hero',
    cameraPosition: [4.8, 1.6, 3.8],
    lookAtTarget: [0, 0.5, 0],
    vehicleRotationY: 0,
    showHotspots: false,
  },
  design: {
    id: 'design',
    cameraPosition: [2.2, 1.1, 2.8],
    lookAtTarget: [0.6, 0.55, 0.3],
    vehicleRotationY: 0.25,
    showHotspots: false,
  },
  models: {
    id: 'models',
    cameraPosition: [4.5, 1.7, 3.6],
    lookAtTarget: [0, 0.5, 0],
    vehicleRotationY: 0.45,
    showHotspots: false,
  },
  performance: {
    id: 'performance',
    cameraPosition: [-4.2, 1.4, 3.0],
    lookAtTarget: [-1.0, 0.55, 0],
    vehicleRotationY: 0.85,
    showHotspots: false,
  },
  engineering: {
    id: 'engineering',
    cameraPosition: [3.2, 3.4, 3.2],
    lookAtTarget: [0, 0.4, 0],
    vehicleRotationY: 0.4,
    showHotspots: true,
  },
  interior: {
    id: 'interior',
    cameraPosition: [0.4, 1.25, 1.7],
    lookAtTarget: [-0.2, 0.75, 0],
    vehicleRotationY: 0,
    showHotspots: false,
  },
  technology: {
    id: 'technology',
    cameraPosition: [3.6, 1.5, -2.4],
    lookAtTarget: [0.8, 0.5, 0],
    vehicleRotationY: -0.55,
    showHotspots: false,
  },
  gallery: {
    id: 'gallery',
    cameraPosition: [4.6, 1.6, 3.4],
    lookAtTarget: [0, 0.5, 0],
    vehicleRotationY: 0.3,
    showHotspots: false,
  },
  'test-drive': {
    id: 'test-drive',
    cameraPosition: [5.0, 1.8, 3.2],
    lookAtTarget: [0, 0.5, 0],
    vehicleRotationY: 0.15,
    showHotspots: false,
  },
};
