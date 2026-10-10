import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web2Apk',
  description: 'Wrap URL as Android app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
