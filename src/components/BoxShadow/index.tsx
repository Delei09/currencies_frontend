import React from 'react';

import * as S from './styles';

type BoxShadowProps = React.ComponentProps<'div'>;
export default function BoxShadow({ children, ...props }: BoxShadowProps) {
  return (
    <S.Shadow {...props}>
      {children}
    </S.Shadow>
  )
}
