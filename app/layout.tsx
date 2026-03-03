import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Pillbox Pharmacy Proposal',
  description: 'Interactive proposal presentation for Pillbox Pharmacy',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
