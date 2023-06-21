import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

export const Page = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};
