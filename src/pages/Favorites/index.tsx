import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Body from '../../components/Body';
import CurrencyChart from '../../components/Chart';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import Navigation from '../../components/Navigation';
import { Description, DescriptionBold, TitleBold } from '../../components/Typography';
import { URL_BASE } from '../../constants';
import { useUser } from '../../context/user';
import { CurrencyProps } from '../../types';
import * as S from './styles';

export default function Favorites() {
  const { user } = useUser();
  const [currenciesFavorite, setCurrenciesFavorite] =
    useState<[CurrencyProps[]]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const acesss_token = localStorage.getItem('access_token');
      const config = {
        headers: { Authorization: `Bearer ${acesss_token}` },
      };

      const dataFavorite = user?.currenciesFavorite?.map(async (currency) => {
        const { data } = await axios.get(
          `${URL_BASE}/currencies/${currency}`,
          config
        );
        return data;
      });

      const currencies = await Promise.all(dataFavorite ?? []);
      setCurrenciesFavorite(currencies as [CurrencyProps[]]);
      setIsLoading(false);
    };

    getData();
  }, [user]);

  const renderChart = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (currenciesFavorite) {
      return currenciesFavorite.map((currency) => (
        <CurrencyChart key={currency[0].code} data={currency} />
      ));
    } else {
      return <DescriptionBold>Nenhuma moeda favorita</DescriptionBold>;
    }
  };

  return (
    <S.ContainerFavorite>
      <Header title="Moedas Favoritas" username={user?.username ?? ''} />
      <Navigation menuSelected="favorites" />
      <Body>
        <TitleBold>Moedas Favoritas</TitleBold>
        <DescriptionBold>
          {user?.currenciesFavorite?.length} moedas favoritas
        </DescriptionBold>
        <Description style={{ margin: '20px' }}>
          Veja as informações de cotação dos ultimos 10 minutos das moedas
          favoritas
        </Description>
        {renderChart()}
      </Body>
    </S.ContainerFavorite>
  );
}

