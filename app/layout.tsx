import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Accredian – Level Up Your Career With India\'s Top Institutes',
  description: 'Learn from top universities and grow your career with industry-relevant programs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        <Toaster position="top-right" />
        </body>
      
    </html>
  );
}