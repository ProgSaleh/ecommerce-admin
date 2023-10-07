import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { SettingsForm } from './components/settings-form';
// import { SettingsForm } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form';

import prismadb from '@/lib/prismadb';

interface SettingsProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<SettingsProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: { id: params.storeId, userId },
  });

  if (!store) {
    // if by any change no store, redirect to the dashboard's page.
    // if this happens,
    // usually it's because the user has changed the storeId in the url...
    redirect('/');
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store}></SettingsForm>
      </div>
    </div>
  );
};

export default SettingsPage;
