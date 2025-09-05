"use client";

import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AppLayoutClient } from '@/components/layout/AppLayoutClient';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const metadata: Metadata = {
  title: 'PropFind - Find Your Next Property',
  description: 'A modern real estate platform to find properties for sale and rent.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("light", inter.variable)}>
      <body className="font-body bg-background text-foreground antialiased">
        <AuthProvider>
          <AppLayoutClient>{children}</AppLayoutClient>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
