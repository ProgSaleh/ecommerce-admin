import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import prismadb from '@/lib/prismadb';

export default async function DashboardLayout({
  params,
  children,
}: {
  params: { storeId: string };
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <div>Navbar...</div>
      {children}
    </>
  );
}
