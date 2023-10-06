'use client';

import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

const SetupPage = () => {
  const storeModal = useStoreModal();

  useEffect(() => {
    if (!storeModal.isOpen) {
      storeModal.onOpen();
    }
  }, [storeModal.isOpen, storeModal.onOpen]);

  return <div className="p-4">saleh root page</div>;
};

export default SetupPage;
