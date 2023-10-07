import { useEffect, useState } from 'react';

// This custom hook is for handling the use of window object on the server since it doesn't exist there.
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return '';

  return origin;
};
