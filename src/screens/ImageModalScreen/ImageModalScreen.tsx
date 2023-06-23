import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationModel} from 'navigation/navigation.types';
import {useImageById, useMutateImage} from 'features/image';
import {ImageFullscreen} from 'components/molecules/ImageFullscreen';
import {ImageModalScreenStyled} from './ImageModalScreen.styled';
import {Keyboard} from 'react-native';
import {KeyboardAvoidingContainer} from './components/KeyboardAvoidingContainer/KeyboardAvoidingContainer';

export const ImageModalScreen = ({
  navigation,
  route,
}: NavigationModel.Props) => {
  const {bottom, top} = useSafeAreaInsets();

  const {data, refetch} = useImageById(route.params?.id);
  const {data: updated, mutate: updateImage} = useMutateImage(
    route.params?.id,
    refetch,
  );

  const onBackPress = () => navigation.goBack();

  const onSubmitDescription = (description: string) =>
    updateImage({description});

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
    <KeyboardAvoidingContainer>
      <ImageModalScreenStyled.Container
        onPress={Keyboard.dismiss}
        accessible={false}>
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
          initialText={updated?.description || data?.description}
          style={descriptionStyle}
          onSubmitText={onSubmitDescription}
        />
      </ImageModalScreenStyled.Container>
    </KeyboardAvoidingContainer>
  );
};
