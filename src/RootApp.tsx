import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@navigation/RootStack';

export const RootApp = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
