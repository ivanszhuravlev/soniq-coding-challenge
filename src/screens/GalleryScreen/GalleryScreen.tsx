import React, {useCallback} from 'react';
import {NavigationModel} from 'navigation/navigation.types';
import {Page} from 'components/atoms/Page';
import {Gallery} from 'components/organisms/Gallery/Gallery';
import {useImagesList} from 'features/image';

export const GalleryScreen = ({navigation}: NavigationModel.Props) => {
  const {data, isLoading} = useImagesList();

  const onItemPress = useCallback(
    (id: string) => {
      navigation.navigate('ImageModal', {id});
    },
    [navigation],
  );

  if (!data && !isLoading) {
    return;
  }

  return (
    <Page>
      <Gallery
        data={data?.data || []}
        total={data?.total || 0}
        onItemPress={onItemPress}
      />
    </Page>
  );
};
