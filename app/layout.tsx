import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Novatelia Studio | AI, UX and Digital Product Studio',
    template: '%s | Novatelia Studio'
  },
  description:
    'Novatelia Studio designs and builds AI-powered websites, web applications, digital platforms, brand systems and automation experiences for ambitious companies.',
  metadataBase: new URL('https://novatelia.com'),
  openGraph: {
    title: 'Novatelia Studio',
    description:
      'AI, UX, web engineering, branding and digital growth for modern businesses.',
    url: 'https://novatelia.com',
    siteName: 'Novatelia Studio',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
