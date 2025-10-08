import './globals.css';
import type { ReactNode } from 'react';


export const metadata = { title: 'École', description: 'Site scolaire' };


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="fr">
<body className="min-h-dvh antialiased">
<main className="mx-auto max-w-5xl p-4">{children}</main>
</body>
</html>
);
}