import {Icon} from 'components/atoms/Icon';
import styled from 'styled-components/native';

const Container = styled.Pressable(({theme}) => ({
  flexDirection: 'row',
  alignItems: 'center',

  padding: theme.offset(2),
  borderRadius: theme.radius.small,
  backgroundColor: theme.color.primaryWhite,
}));

const LeftIcon = styled(Icon).attrs(({theme}) => ({
  color: theme.color.primaryDark,
  size: 16,
}))``;

const Text = styled.Text(({theme}) => ({
  marginLeft: theme.offset(1),
  color: theme.color.primaryDark,
  fontSize: 14,
  fontWeight: '600',
}));

export const InlineButtonStyled = {
  Container,
  LeftIcon,
  Text,
};
