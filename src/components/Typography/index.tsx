import React, { ComponentProps } from 'react';

import * as S from './styles';

type TypographyProps = {
  font?: string
  color?: string
} & ComponentProps<'h2'>

export function Title({ children,...props }: TypographyProps) {
  return (
    <S.TitleS {...props} >
      {children}
    </S.TitleS>
  )
}

export function TitleBold({ children,...props }: TypographyProps) {
  return (
    <S.TitleBoldS {...props} >
      {children}
    </S.TitleBoldS>
  )
}

export function Description({ children,...props }: TypographyProps) {
  return (
    <S.DescriptionS {...props} >
      {children}
    </S.DescriptionS>
  )
}

export function DescriptionBold({ children,...props }: TypographyProps) {
  return (
    <S.DescriptionBoldS {...props} >
      {children}
    </S.DescriptionBoldS>
  )
} 