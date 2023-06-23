import {useMemo} from 'react';
import {DefaultTheme} from 'styled-components/native';

interface Color {
  primaryDark: string;
  primaryWhite: string;
  grey10: string;
  grey50: string;
}

enum Radius {
  small = 8,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    radius: typeof Radius;
    offset: (num: number) => number;
  }
}

const THEME_LIGHT: Color = {
  primaryDark: '#232323',
  primaryWhite: '#ffffff',
  grey10: '#efefef',
  grey50: '#a8a8a8',
};

const THEME_DARK: Color = {
  primaryDark: '#232323',
  primaryWhite: '#ffffff',
  grey10: '#efefef',
  grey50: '#a8a8a8',
};

const sizeFactor = 4;

const THEME_MEASURES: Omit<DefaultTheme, 'color'> = {
  offset: (num: number) => sizeFactor * num,
  radius: Radius,
};

export const useCurrentTheme = (): DefaultTheme => {
  const isLightMode = true;

  const color = useMemo(
    () => (isLightMode ? THEME_LIGHT : THEME_DARK),
    [isLightMode],
  );

  return {color, ...THEME_MEASURES};
};
