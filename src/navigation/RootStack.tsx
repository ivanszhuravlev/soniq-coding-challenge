import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GalleryScreen} from 'screens/GalleryScreen';
import {ImageModalScreen} from 'screens/ImageModalScreen';
import {NavigationModel} from './navigation.types';

const Stack = createNativeStackNavigator<NavigationModel.RootStackParamsList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Gallery"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen
        name="ImageModal"
        component={ImageModalScreen}
        options={{
          animation: 'fade',
          presentation: 'transparentModal',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
