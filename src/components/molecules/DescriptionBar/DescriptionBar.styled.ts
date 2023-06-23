import styled from 'styled-components/native';

const Container = styled.View({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
});

const Content = styled.View(({theme}) => ({
  flex: 1,
  padding: theme.offset(4),
}));

const Text = styled.TextInput.attrs(({theme}) => ({
  multiline: true,
  placeholderTextColor: theme.color.grey50,
}))(({theme}) => ({
  color: theme.color.primaryDark,
  fontSize: 16,
  lineHeight: 20,
}));

export const DescriptionBarStyled = {
  Container,
  Content,
  Text,
};
