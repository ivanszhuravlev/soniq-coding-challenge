import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationModel} from 'navigation/navigation.types';
import {useImageById} from 'features/image';
import {ImageFullscreen} from 'components/molecules/ImageFullscreen';
import {ImageModalScreenStyled} from './ImageModalScreen.styled';

export const ImageModalScreen = ({
  navigation,
  route,
}: NavigationModel.Props) => {
  const {bottom, top} = useSafeAreaInsets();

  const {data} = useImageById(route.params?.id);

  const onBackPress = () => navigation.goBack();

  const imageContainerStyle = useMemo(
    () => ({
      paddingBottom: bottom,
      paddingTop: top,
    }),
    [top, bottom],
  );

  const descriptionStyle = useMemo(
    () => ({
      paddingBottom: bottom,
    }),
    [bottom],
  );

  const imageSource = useMemo(
    () => ({uri: data?.src.original}),
    [data?.src.original],
  );

  return (
    <ImageModalScreenStyled.Container>
      {!!data && (
        <ImageModalScreenStyled.ImageContainer style={imageContainerStyle}>
          <ImageFullscreen
            source={imageSource}
            aspectRatio={data.width / data.height}
            resizeMode={'contain'}
          />
        </ImageModalScreenStyled.ImageContainer>
      )}
      <ImageModalScreenStyled.HeaderStyled
        fillStatusBar
        onLeftPress={onBackPress}
      />
      <ImageModalScreenStyled.DescriptionStyled
        text="Yo yoyoyo description! Attention please, all trains go to U Haupbahnhof without stops!"
        style={descriptionStyle}
      />
    </ImageModalScreenStyled.Container>
  );
};
