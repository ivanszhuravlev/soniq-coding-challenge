import styled from 'styled-components/native';

const Container = styled.View(({theme}) => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: theme.offset(2),
}));

const Spacer = styled.View(({theme}) => ({
  width: theme.offset(2),
}));

export const ActionsBarStyled = {
  Container,
  Spacer,
};
