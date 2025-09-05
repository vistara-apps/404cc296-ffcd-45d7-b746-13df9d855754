import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GuardianGuide - Know Your Rights. Stay Safe. Instantly.',
  description: 'A mobile-first guide for individuals to understand and assert their rights during interactions with law enforcement.',
  keywords: 'legal rights, law enforcement, police interactions, civil rights, legal guide',
  authors: [{ name: 'GuardianGuide Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
