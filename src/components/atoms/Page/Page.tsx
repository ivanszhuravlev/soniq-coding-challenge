import React, {PropsWithChildren} from 'react';
import {PageStyled} from './Page.styled';

export const Page = ({children}: PropsWithChildren) => {
  return <PageStyled.Container>{children}</PageStyled.Container>;
};
