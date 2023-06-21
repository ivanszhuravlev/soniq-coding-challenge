import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import {RootStack} from 'navigation/RootStack';
import {useCurrentTheme} from 'theme';

const queryClient = new QueryClient();

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
