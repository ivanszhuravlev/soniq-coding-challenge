import {NativeStackScreenProps} from '@react-navigation/native-stack';

export namespace NavigationModel {
  export type RootStackParamsList = {
    Gallery: undefined;
    ImageModal: {
      id: string;
    };
  };

  /**
   * FIXME: make it generic
   *
   * (I stumbled upon the weirdest issue with TS, which took all my time)
   */
  export type Props = NativeStackScreenProps<
    RootStackParamsList,
    keyof RootStackParamsList
  >;
}
