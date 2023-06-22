import React, {useCallback, useState} from 'react';
import {FastImageProps} from 'react-native-fast-image';
import {ImageFullscreenStyled} from './ImageFullscreen.styled';

type Props = FastImageProps & {
  aspectRatio?: number;
};

export const ImageFullscreen = ({aspectRatio, ...props}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => setIsLoading(true), []);
  const hideLoader = useCallback(() => setIsLoading(false), []);

  return (
    <ImageFullscreenStyled.Container ratio={aspectRatio}>
      <ImageFullscreenStyled.Image
        {...props}
        resizeMode={'contain'}
        onLoadStart={showLoader}
        onLoadEnd={hideLoader}
      />
      {isLoading && <ImageFullscreenStyled.Loader />}
    </ImageFullscreenStyled.Container>
  );
};
