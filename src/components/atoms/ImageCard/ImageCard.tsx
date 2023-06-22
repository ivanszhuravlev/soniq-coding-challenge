import React from 'react';
import {ImageCardStyled} from './ImageCard.styled';

type Props = {
  id: string;
  url: string;
  description: string;
  onPress: (id: string) => void;
  ratio: number;
};

export const ImageCard = ({url, id, onPress, ratio}: Props) => {
  const source = {uri: url};

  const handlePress = () => onPress(id);

  return (
    <ImageCardStyled.Container ratio={ratio} onPress={handlePress}>
      <ImageCardStyled.Image source={source} resizeMode={'cover'} />
    </ImageCardStyled.Container>
  );
};
