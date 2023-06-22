import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

type WithRatio = {
  ratio: number | undefined;
};

const Container = styled.View<WithRatio>(({theme, ratio}) => ({
  width: '100%',
  aspectRatio: ratio ? `${ratio}` : undefined,
  backgroundColor: theme.color.grey10,
}));

const Image = styled(FastImage)({
  flex: 1,
});

const Loader = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.color.primaryDark,
}))({...StyleSheet.absoluteFillObject});

export const ImageFullscreenStyled = {
  Container,
  Image,
  Loader,
};
