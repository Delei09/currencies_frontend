import React, { ComponentProps } from 'react';

import * as S from './styles';

type BodyProps = ComponentProps<'body'>;
export default function Body({ children }: BodyProps) {
  return <S.BodyS>{children}</S.BodyS>;
}
