import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {RootStack} from 'navigation/RootStack';
import {useCurrentTheme} from 'theme';

export const RootApp = () => {
  const theme = useCurrentTheme();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};
