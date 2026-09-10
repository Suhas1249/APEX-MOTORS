export interface ApexModel {
  id: string;
  name: string;
  category: string;
  tagline: string;
  power: string;
  acceleration: string;
  topSpeed: string;
  range: string;
  drivetrain: string;
  description: string;
}

export const APEX_MODELS: ApexModel[] = [
  {
    id: 'apex-r1',
    name: 'APEX R1',
    category: 'Performance Coupe',
    tagline: 'Pure aerodynamic poise and instantaneous electric acceleration.',
    power: '520 HP',
    acceleration: '3.4 SEC',
    topSpeed: '320 KM/H',
    range: '540 KM',
    drivetrain: 'Dual Motor Torque Vectoring AWD',
    description:
      'The definitive benchmark of electric performance. Engineered with a monocoque carbon chassis and active aerodynamic downforce surfaces.',
  },
  {
    id: 'apex-gt',
    name: 'APEX GT',
    category: 'Grand Touring',
    tagline: 'Effortless continental velocity wrapped in bespoke handcrafted luxury.',
    power: '610 HP',
    acceleration: '3.1 SEC',
    topSpeed: '335 KM/H',
    range: '680 KM',
    drivetrain: 'Tri-Motor HyperDrive AWD',
    description:
      'Engineered for relentless endurance. Combines acoustic double-glazed glass, executive cockpit ergonomics, and supreme long-distance range.',
  },
  {
    id: 'apex-x',
    name: 'APEX X',
    category: 'Performance SUV',
    tagline: 'Uncompromising power meets elevated perspective and all-terrain poise.',
    power: '580 HP',
    acceleration: '3.6 SEC',
    topSpeed: '290 KM/H',
    range: '590 KM',
    drivetrain: 'Intelligent Adaptive Quad-Drive',
    description:
      'Adaptive air suspension with 60mm lift capability, variable terrain response, and an expansive panoramic sky canopy.',
  },
];
