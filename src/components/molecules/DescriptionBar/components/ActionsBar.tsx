import React from 'react';
import {ActionsBarStyled} from './ActionsBar.styled';
import {InlineButton} from 'components/molecules/InlineButton';

type Props = {
  onSave: () => void;
  onCancel: () => void;
};

export const ActionsBar = ({onSave, onCancel}: Props) => {
  return (
    <ActionsBarStyled.Container>
      <InlineButton icon="check" label="Save" onPress={onSave} />
      <ActionsBarStyled.Spacer />
      <InlineButton icon="close" label="Cancel" onPress={onCancel} />
    </ActionsBarStyled.Container>
  );
};
