// app/layout.tsx  (SERVER)
import type { Metadata } from 'next';
import Providers from './providers';
import './globals.css';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Golch Farms — Fresh & Dried Catfish, Feed, Hatchery',
  description: 'Golch Farms supplies fresh & dried catfish…',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const cookie = h.get('cookie') ?? '';

  const { ColorModeScript } = await import('@chakra-ui/react');

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ColorModeScript type="cookie" initialColorMode="light" />
        <Providers cookies={cookie}>{children}</Providers>
      </body>
    </html>
  );
}
