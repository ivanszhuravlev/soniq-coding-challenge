import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

type WithRatio = {
  ratio: number;
};

const Container = styled.Pressable<WithRatio>(({ratio}) => ({
  flex: 1,
  aspectRatio: `${ratio}`,
}));

const Image = styled(FastImage)({
  flex: 1,
});

export const ImageCardStyled = {
  Container,
  Image,
};
