import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { MainProvider } from '@/components/MainProvider';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Aurora Next Starter',
  description:
    'A production-ready Next.js starter with TypeScript, Tailwind CSS, Biome, Vitest, and Storybook.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'font-primary')} suppressHydrationWarning>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
