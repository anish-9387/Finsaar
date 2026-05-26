import React from 'react';
import { GeneralContextProvider } from '@/components/GeneralContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GeneralContextProvider>
      {children}
    </GeneralContextProvider>
  );
}