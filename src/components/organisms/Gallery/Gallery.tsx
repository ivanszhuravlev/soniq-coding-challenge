import {ListRenderItem, MasonryFlashList} from '@shopify/flash-list';
import {ImageCard} from 'components/atoms/ImageCard';
import {ImageModel} from 'features/image/image.types';
import React, {useCallback} from 'react';
import {GalleryStyled} from './Gallery.styled';
import {useTheme} from 'styled-components/native';

type Props = {
  data: ImageModel.Image[];
  total: number;
  onItemPress: (id: string) => void;
};

export const Gallery = ({data, onItemPress}: Props) => {
  const theme = useTheme();

  const renderItem: ListRenderItem<ImageModel.Image> = useCallback(
    ({item}) => (
      <GalleryStyled.CellContainer>
        <ImageCard
          id={item.id}
          url={item.src.medium}
          description={item.description}
          onPress={onItemPress}
          ratio={item.width / item.height}
        />
      </GalleryStyled.CellContainer>
    ),
    [onItemPress],
  );

  const keyExtractor = (item: ImageModel.Image) => item.id;

  const containerStyle = {
    padding: theme.offset(1),
  };

  return (
    <MasonryFlashList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={200}
      contentContainerStyle={containerStyle}
    />
  );
};
