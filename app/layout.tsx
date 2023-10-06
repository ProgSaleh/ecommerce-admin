import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from '@/providers/modal-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* when this modal's visible, it will NOT close unless the admin enters a new store.
          this can be very strict behaviour and agains UX but's like a validation. */}
          <ModalProvider />

          {/* whole project base on the route. */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
