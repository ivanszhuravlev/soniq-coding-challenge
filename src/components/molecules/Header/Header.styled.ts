import styled from 'styled-components/native';
import {Icon} from 'components/atoms/Icon';

const Container = styled.View(({theme}) => ({
  backgroundColor: theme.color.primaryWhite,
  width: '100%',
}));

const Content = styled.View(({theme}) => ({
  paddingHorizontal: theme.offset(4),
  height: 48,
  justifyContent: 'center',
}));

const ButtonLeft = styled.Pressable``;

const ButtonLeftIcon = styled(Icon).attrs(({theme}) => ({
  name: 'chevron-left',
  color: theme.color.primaryDark,
  size: 24,
}))``;

export const HeaderStyled = {
  Container,
  Content,
  ButtonLeft,
  ButtonLeftIcon,
};
