import React, {useEffect, useRef, useState} from 'react';
import {DescriptionBarStyled} from './DescriptionBar.styled';
import {StyleProp, ViewStyle} from 'react-native';
import {ActionsBar} from './components';

type Props = {
  initialText: string | undefined;
  style?: StyleProp<ViewStyle>;
  onSubmitText: (text: string) => void;
};

export const DescriptionBar = ({
  initialText = '',
  style,
  onSubmitText,
}: Props) => {
  const [text, setText] = useState(initialText);
  const touched = useRef(false);

  const onTextChanged = (_text: string) => {
    if (touched.current) {
      return setText(_text);
    }
  };

  const onKeyPress = () => {
    if (!touched.current) {
      return (touched.current = true);
    }
  };

  const onSave = () => {
    onSubmitText(text.trim());
    touched.current = false;
  };

  const onCancel = () => {
    setText(initialText);
    touched.current = false;
  };

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  return (
    <DescriptionBarStyled.Container style={style}>
      <DescriptionBarStyled.Content>
        {touched.current && <ActionsBar onSave={onSave} onCancel={onCancel} />}
        <DescriptionBarStyled.Text
          placeholder="...Add description"
          value={text}
          onKeyPress={onKeyPress}
          onChangeText={onTextChanged}
        />
      </DescriptionBarStyled.Content>
    </DescriptionBarStyled.Container>
  );
};
