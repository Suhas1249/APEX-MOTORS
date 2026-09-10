export interface HotspotItem {
  id: string;
  title: string;
  category: string;
  position: [number, number, number]; // 3D coordinates relative to vehicle center
  summary: string;
  details: string[];
}

export const HOTSPOTS: HotspotItem[] = [
  {
    id: 'headlight',
    title: 'Photonic Matrix Headlights',
    category: 'OPTICS & VISION',
    position: [1.8, 0.7, 0.75],
    summary: 'Ultra-thin adaptive laser matrix with 84 micro-LED sectors.',
    details: [
      'Active curve beam steering with predictive GPS road mapping',
      'Anti-glare high-beam cutout preserving oncoming driver vision',
      'Signature APEX startup light choreography',
    ],
  },
  {
    id: 'wheel',
    title: 'Forged Aero Wheels & Ceramic Brakes',
    category: 'CHASSIS & DYNAMICS',
    position: [1.4, 0.35, 1.05],
    summary: '21-inch forged turbine alloy with 420mm carbon-ceramic rotors.',
    details: [
      'Turbine blade spoke geometry extracting brake heat at speed',
      'Monobloc 6-piston calipers finished in heat-resistant copper glaze',
      'Reduced unsprung mass by 14.8 kg across the axle',
    ],
  },
  {
    id: 'hood',
    title: 'Active Aero Hood Duct',
    category: 'AERODYNAMICS',
    position: [0.8, 0.82, 0.0],
    summary: 'Central air extractor channeling air from front intake over the roof.',
    details: [
      'Delivers 140 kg of positive front axle downforce at 200 km/h',
      'Dual electronic bypass flaps modulate thermal drag at highway cruising',
      'Constructed from single-piece autoclaved pre-preg carbon fiber',
    ],
  },
  {
    id: 'cockpit',
    title: 'Minimalist Digital Cockpit',
    category: 'INTERIOR ARCHITECTURE',
    position: [-0.3, 1.1, 0.4],
    summary: 'Driver-focused ergonomic glasshouse with floating OLED horizon display.',
    details: [
      'Full-windshield augmented reality heads-up display (AR-HUD)',
      'Vegetable-tanned technical microfiber with copper contrast stitching',
      'Acoustic laminated canopy reducing cabin noise below 58 dB at 120 km/h',
    ],
  },
  {
    id: 'rear',
    title: 'Venturi Diffuser & Photonic Blade',
    category: 'AERODYNAMICS & SIGNATURE',
    position: [-2.1, 0.65, 0.0],
    summary: 'Functional carbon diffuser creating underbody ground effect suction.',
    details: [
      'Twin active aerodynamic flaps deploying at speeds above 90 km/h',
      'Full-width edge-to-edge optical lightbar acting as drag boundary breaker',
      'Zero turbulence rear wake separation profile',
    ],
  },
];
