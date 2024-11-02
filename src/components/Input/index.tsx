import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

export default function Input({ icon, ...props }: InputProps) {
  return (
    <S.StyledInput>
      {icon && <S.StyledIcon>{icon}</S.StyledIcon>}
      <S.Input {...props} />
    </S.StyledInput>
  );
}
