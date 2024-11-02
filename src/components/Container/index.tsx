import React from 'react';

import * as S from './styles';

type ContainerProps = React.ComponentProps<'div'>;
type ContainerFormProps = React.ComponentProps<'form'>;


export function Container({ children, ...rest }: ContainerProps) {
  return <S.Container  {...rest}>{children}</S.Container>;
}
export const ContainerMedium = ({ children, ...rest }: ContainerProps) => (
  <S.ContainerLoginS {...rest}>{children}</S.ContainerLoginS>
);

export const ContainerForms = ({ children, ...rest }: ContainerFormProps) => (
  <S.ContainerFormS {...rest}>{children}</S.ContainerFormS>
)