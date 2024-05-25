import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

// NextJS optimizes font loading for us
const inter = Inter({ subsets: ['latin'] });

// We can add any metadata we want to the layout
// It will be used as default metadata for all pages
export const metadata: Metadata = {
  title: 'NBA Players showcase app',
  description: 'This app is just a showcase for NextJS app router',
};

// This is the root layout component that will be used for all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
