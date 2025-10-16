import './globals.css';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';

export const metadata = { 
  title: 'Ecole ukrainienne à Lyon', 
  description: 'Site scolaire',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh antialiased">
        <LanguageProvider>
          <main className="p-4">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}