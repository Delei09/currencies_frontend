import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import io from 'socket.io-client';

import Body from '../../components/Body';
import BoxShadow from '../../components/BoxShadow';
import Card from '../../components/Card';
import { Header } from '../../components/Header';
import Navigation from '../../components/Navigation';
import Table from '../../components/Table';
import { Description, TitleBold } from '../../components/Typography';
import { URL_BASE } from '../../constants';
import { useUser } from '../../context/user';
import { CurrencyProps } from '../../types';
import * as S from './styles';

export default function Home() {
  const [currencies, setCurrencies] = useState<CurrencyProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    const socket = io('http://localhost:4000');
    const timer = setInterval(() => {
      socket.emit('currencies');
      socket.on('currencies', (data) => {
        const currenciesWithFavorite = formatCurrency(Object.values(data) as unknown as CurrencyProps[]);
        setCurrencies(() => currenciesWithFavorite);
        setIsLoading(false);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      socket.disconnect();
    };
  }, [user?.currenciesFavorite]);

  const formatCurrency = (data: CurrencyProps[]) => {
    return data.map((currency) => ({
      ...currency,
      favorite: !!user?.currenciesFavorite?.includes(currency.code),
    }));
  };

  const handleFavoriteCurrency = async (code: string, index: number) => {
    const currencyIndex = currencies.findIndex(
      (currency) => currency.code === code
    );
    if (currencyIndex > -1) {
      const currency = {
        ...currencies[currencyIndex],
        favorite: !currencies[currencyIndex].favorite,
      };
      const newCurrencies = [...currencies];
      newCurrencies[currencyIndex] = currency;
      setCurrencies(newCurrencies);
      toast.success(
        currency.favorite
          ? `${code} favoritada com sucesso!`
          : `${code} desfavoritada com sucesso!`
      );

      if (user) {
        const userUpdated = {
          ...user,
          currenciesFavorite: newCurrencies
            .filter((c) => c.favorite)
            .map((c) => c.code),
        };
        setUser(userUpdated);
        const access_token = localStorage.getItem('access_token');
        const config = {
          headers: { Authorization: `Bearer ${access_token}` },
        };
        await axios.patch(`${URL_BASE}/users/${user.id}`, userUpdated, config);
      }
    }
  };

  return (
    <S.ContainerHome>
      <Header title="Home" username={user?.username ?? ''} />
      <Navigation />
      <Body>
        <S.ContainerTitle>
          <TitleBold style={{ textAlign: 'center' }}>Moedas</TitleBold>
          <Description style={{ textAlign: 'center' }}>
            Veja suas moedas e adicione as suas favoritas
          </Description>
        </S.ContainerTitle>
        <S.ContainerCard>
          {currencies.map((currency) => {
            if (currency.favorite) {
              return <Card key={currency.name} currency={currency} />;
            }
          })}
        </S.ContainerCard>
        <BoxShadow>
          <Table
            handleFavoriteCurrency={handleFavoriteCurrency}
            currencies={currencies}
            isLoading={isLoading}
          />
        </BoxShadow>
      </Body>
    </S.ContainerHome>
  );
}
