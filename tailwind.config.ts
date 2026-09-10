import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          void: '#070707',
          graphite: '#111111',
          surface: '#171717',
          metal: '#8C8C8C',
          silver: '#D6D6D6',
          text: '#F5F5F2',
          muted: '#A7A7A3',
          copper: '#B86B3E',
          champagne: '#C8A878',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        technical: ['var(--font-manrope)', 'monospace'],
      },
      borderColor: {
        'apex-border': 'rgba(255, 255, 255, 0.12)',
        'apex-copper-glow': 'rgba(184, 107, 62, 0.35)',
      },
      boxShadow: {
        'copper-glow': '0 0 30px rgba(184, 107, 62, 0.18)',
        'copper-glow-lg': '0 0 50px rgba(184, 107, 62, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
