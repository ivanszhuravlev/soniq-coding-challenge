import React, {useMemo} from 'react';
import {HeaderStyled} from './Header.styled';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  onLeftPress: () => void;
  fillStatusBar?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Header = ({onLeftPress, fillStatusBar, style}: Props) => {
  const {top} = useSafeAreaInsets();

  const dynamicStyle = useMemo(
    () => ({
      paddingTop: fillStatusBar ? top : 0,
    }),
    [top, fillStatusBar],
  );

  return (
    <HeaderStyled.Container style={[dynamicStyle, style]}>
      <HeaderStyled.Content>
        <HeaderStyled.ButtonLeft onPress={onLeftPress}>
          <HeaderStyled.ButtonLeftIcon />
        </HeaderStyled.ButtonLeft>
      </HeaderStyled.Content>
    </HeaderStyled.Container>
  );
};
