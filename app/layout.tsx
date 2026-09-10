import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070707',
};

export const metadata: Metadata = {
  title: 'APEX MOTORS | Engineered to Move',
  description:
    'Experience APEX MOTORS. A digital automotive journey engineered with precision, performance, and presence. Concept presentation by AURAWEBS.',
  keywords: ['Apex Motors', 'Luxury EV', 'Performance Coupe', '3D Automotive', 'AURAWEBS'],
  authors: [{ name: 'AURAWEBS' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="bg-apex-void text-apex-text min-h-screen selection:bg-apex-copper/30 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
