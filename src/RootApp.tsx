import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import {RootStack} from 'navigation/RootStack';
import {useCurrentTheme} from 'theme';
import {LogBox} from 'react-native';
import {queryClient} from 'api/queryClient';

LogBox.ignoreLogs([
  // NOTE: for styled-component's warnings about "px"
  'Expected style',
]);

export const RootApp = () => {
  const theme = useCurrentTheme();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RootStack />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
