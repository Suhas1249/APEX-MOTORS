# APEX MOTORS — Engineered to Move

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r174-black?logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-green)](https://greensock.com/)

A luxury, fully immersive 3D automotive showcase and client demonstration web application engineered for **AURAWEBS** (*"Build. Automate. Evolve."*), presenting the fictional performance brand **APEX MOTORS**.

---

## 🌟 Highlights

- **Dual-Path 3D Vehicle Architecture**:
  - Out-of-the-box aerodynamic procedural concept coupe with metallic clearcoat, curved glasshouse, forged turbine alloy wheels, and copper calipers.
  - Drop-in GLB pipeline ready: place any custom Blender model in `/public/models/apex-r1.glb` to automatically bind PBR materials.
- **Cinematic Studio Lighting**:
  - ACESFilmic tone mapping, large overhead softbox, dual cool silver & warm copper rim lights, and contact ground shadows.
- **Scroll-Synchronized Storytelling**:
  - GSAP ScrollTrigger orchestrates 3D camera staging, rotations, and technical callouts across all 9 chapters.
- **Interactive Atelier Configurator**:
  - Live PBR paint finish customization: Graphite Black, Titanium Silver, and Deep Copper.
- **Interactive 3D Hotspots**:
  - 5 world-space telemetry markers with real-time HUD detail modals.
- **Optics Power Toggle**:
  - Interactive headlight toggle switch on the Hero overlay.
- **Responsive & Accessible**:
  - Dedicated mobile atelier drawer, zero horizontal overflow, touch-optimized, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.11.1)
- npm 9+

### Installation
```bash
# Clone repository
git clone https://github.com/Suhas1249/apex-motors.git
cd apex-motors

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to experience the machine.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📐 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root fonts, brand metadata, viewport
│   ├── page.tsx           # Continuous cinematic scroll narrative
│   └── globals.css        # Luxury dark palette, scrollbar, surfaces
├── components/
│   ├── 3d/
│   │   ├── canvas/        # ExperienceCanvas & FallbackView
│   │   ├── lighting/      # StudioRig multi-point lighting
│   │   ├── models/        # ApexVehicle, ProceduralApexR1, VehicleMaterials, Hotspots
│   │   ├── camera/        # CameraRig with mouse parallax
│   │   └── scenes/        # StudioScene composition
│   ├── configurator/      # Live vehicle paint atelier
│   ├── navigation/        # Floating Navbar & MobileMenu drawer
│   ├── hero/              # HeroOverlay with optics toggle
│   ├── sections/          # Design, Models, Performance, Engineering, Interior, Tech, Gallery, TestDrive
│   ├── ui/                # Button, MetricCounter, HotspotModal, LoadingScreen
│   └── footer/            # Luxury footer with AURAWEBS portfolio credit
└── public/
    └── models/            # Drop-in slot for apex-r1.glb
```

---

## 🛡️ License & Classification

This is a demonstration project created by **AURAWEBS**. All vehicle models and telemetry figures are simulated concept designs for portfolio presentation.
