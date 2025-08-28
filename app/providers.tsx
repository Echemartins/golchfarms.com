// app/providers.tsx  (CLIENT)
'use client';

import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import theme from '@/theme';

export default function Providers({ children, cookies }: { children: React.ReactNode; cookies?: string }) {
  const colorModeManager =
    typeof document === 'undefined'
      ? cookieStorageManagerSSR(cookies ?? '')
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
