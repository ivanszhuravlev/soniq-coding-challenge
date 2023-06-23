import React from 'react';
import {InlineButtonStyled} from './InlineButton.styled';

type Props = {
  icon: string;
  label: string;
  onPress?: () => void;
};

export const InlineButton = ({icon, label, onPress}: Props) => {
  return (
    <InlineButtonStyled.Container onPress={onPress}>
      <InlineButtonStyled.LeftIcon name={icon} />
      <InlineButtonStyled.Text>{label}</InlineButtonStyled.Text>
    </InlineButtonStyled.Container>
  );
};
