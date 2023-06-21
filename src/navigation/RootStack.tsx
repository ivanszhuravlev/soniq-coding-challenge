import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GalleryScreen} from 'screens/GalleryScreen';
import {ImageModalScreen} from 'screens/ImageModalScreen';
import {NavigationModel} from './navigation.types';

const Stack = createNativeStackNavigator<NavigationModel.RootStack>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="ImageModal" component={ImageModalScreen} />
    </Stack.Navigator>
  );
};
