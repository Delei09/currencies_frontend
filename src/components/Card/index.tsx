import React from 'react';
import { MdFavorite } from 'react-icons/md';

import { CurrencyProps } from '../../types';
import BoxShadow from '../BoxShadow';
import { Description, Title } from '../Typography';
import * as S from './styles';

type CardProps = {
  currency: CurrencyProps;
};

export default function Card({ currency }: CardProps) {
  return (
    <BoxShadow>
      <S.CardS>
        <Title font="24">{currency.name.split('/')[0]}</Title>
        <MdFavorite size={24} color="#FF0000" />
      </S.CardS>
      <S.CardS>
        <Description>Alta - {currency.high}</Description>
        <Description>Baixa - {currency.low}</Description>
      </S.CardS>
    </BoxShadow>
  );
}
