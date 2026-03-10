import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Pillbox Pharmacy Proposal',
  description: 'Interactive proposal presentation for Pillbox Pharmacy',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
