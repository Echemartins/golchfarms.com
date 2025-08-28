// theme/index.ts
// 'use client';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#f1f8ff',
    100: '#dbeefe',
    200: '#bfe2ff',
    300: '#93ceff',
    400: '#5ab3ff',
    500: '#2d8cff', // primary
    600: '#1866db',
    700: '#144fb1',
    800: '#113f8c',
    900: '#0f356f',
  },
};

const fonts = {
  heading: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
  body: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
};

const components = {
  Button: {
    baseStyle: { rounded: 'xl' },
    defaultProps: { colorScheme: 'brand' },
  },
  Card: {
    baseStyle: { rounded: '2xl', shadow: 'md' },
  },
};

const theme = extendTheme({ config, colors, fonts, components });
export default theme;