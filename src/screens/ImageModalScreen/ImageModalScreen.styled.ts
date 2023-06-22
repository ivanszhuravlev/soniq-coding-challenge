import {DescriptionBar} from 'components/molecules/DescriptionBar';
import {Header} from 'components/molecules/Header';
import styled from 'styled-components/native';

const Container = styled.View({
  flex: 1,
});

const ImageContainer = styled.View(({theme}) => ({
  justifyContent: 'center',
  backgroundColor: `${theme.color.primaryWhite}ee`,
  flex: 1,
}));

const HeaderStyled = styled(Header)(({theme}) => ({
  backgroundColor: `${theme.color.primaryWhite}bb`,
  position: 'absolute',
  left: 0,
  top: 0,
}));

const DescriptionStyled = styled(DescriptionBar)(({theme}) => ({
  backgroundColor: `${theme.color.primaryWhite}bb`,
}));

export const ImageModalScreenStyled = {
  Container,
  ImageContainer,
  HeaderStyled,
  DescriptionStyled,
};
