import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView).attrs({
  behavior: 'height',
})({
  height: '100%',
});
