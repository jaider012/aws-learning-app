import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function GluestackProvider({ children }: Props) {
  return (
    <GluestackUIProvider config={config}>
      {children}
    </GluestackUIProvider>
  );
} 