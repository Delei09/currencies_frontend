import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { CurrencyProps } from '../../types';
import Loading from '../Loading';
import * as S from './styles';

type TableProps = {
  currencies: CurrencyProps[];
  isLoading: boolean;
  handleFavoriteCurrency: (code: string, index: number) => Promise<void>;
};

export default function Table({
  currencies,
  isLoading,
  handleFavoriteCurrency,
}: TableProps) {
  return isLoading ? (
    <Loading />
  ) : (
    <S.TableContainer>
      <S.TableS>
        <thead>
          <S.TableRowS>
            <S.TableHeaderS>Nome</S.TableHeaderS>
            <S.TableHeaderS>Code</S.TableHeaderS>
            <S.TableHeaderS>Alta</S.TableHeaderS>
            <S.TableHeaderS>Baixa</S.TableHeaderS>
            <S.TableHeaderS>Bid</S.TableHeaderS>
            <S.TableHeaderS>Ask</S.TableHeaderS>
            <S.TableHeaderS>Variação</S.TableHeaderS>
            <S.TableHeaderS>% Variação</S.TableHeaderS>
            <S.TableHeaderS>Favorito</S.TableHeaderS>
          </S.TableRowS>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <S.TableRowS key={currency.name}>
              <S.TableCellS>{currency.name.split('/')[0]}</S.TableCellS>
              <S.TableCellS>{currency.code.toLocaleString()}</S.TableCellS>
              <S.TableCellS>R$ {currency.high.toLocaleString()}</S.TableCellS>
              <S.TableCellS>R$ {currency.low.toLocaleString()}</S.TableCellS>
              <S.TableCellS>{currency.bid}</S.TableCellS>
              <S.TableCellS>{currency.ask}</S.TableCellS>
              <S.TableCellS>{currency.varBid}</S.TableCellS>
              <S.TableCellS>{currency.pctChange}</S.TableCellS>
              <S.TableCellS
                style={{ cursor: 'pointer' }}
                onClick={() => handleFavoriteCurrency(currency.code, index)}
              >
                {currency.favorite ? (
                  <MdFavorite color="#FF0000" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </S.TableCellS>
            </S.TableRowS>
          ))}
        </tbody>
      </S.TableS>
    </S.TableContainer>
  );
}
