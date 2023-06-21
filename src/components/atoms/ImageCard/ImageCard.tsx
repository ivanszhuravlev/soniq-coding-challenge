import React, {useMemo} from 'react';
import {Pressable} from 'react-native';
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

  const containerStyle = useMemo(
    () => ({
      aspectRatio: ratio,
    }),
    [ratio],
  );

  return (
    <Pressable style={containerStyle} onPress={handlePress}>
      <ImageCardStyled.Image source={source} resizeMode={'cover'} />
    </Pressable>
  );
};
