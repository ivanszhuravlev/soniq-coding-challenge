import React from 'react';
import {DescriptionBarStyled} from './DescriptionBar.styled';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  text: string;
  style?: StyleProp<ViewStyle>;
};

export const DescriptionBar = ({text, style}: Props) => {
  return (
    <DescriptionBarStyled.Container style={style}>
      <DescriptionBarStyled.Content>
        <DescriptionBarStyled.Text>{text}</DescriptionBarStyled.Text>
      </DescriptionBarStyled.Content>
    </DescriptionBarStyled.Container>
  );
};
