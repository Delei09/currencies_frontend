import React, { ComponentProps } from 'react';

import * as S from './styles';

type ButtonProps = ComponentProps<'button'>;

export default function Button({ children, ...props }: ButtonProps) {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
}
