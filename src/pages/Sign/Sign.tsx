import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import {
  ContainerFluid,
  ContainerGrid4,
  ContainerGrid8,
  ContainerLogin,
} from '../../components/Container';
import { Header } from '../../components/Header';
import { CreateUser } from './CreateUser';
import { Login } from './Login';
import { User } from '../../types';

export default function Sign() {
  const [page, setPage] = useState('Entrar');

  const changePage = (page: string) => {
    setPage(page);
  };

  return (
    <>
      <Header pages={['Criar conta', 'Entrar']} changePage={changePage} />
      <body style={{ marginTop: 0 }}>
        <ContainerFluid>
          <ContainerGrid4>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <AttachMoneyIcon sx={{ fontSize: '3.5rem' }} />
              <Typography
                variant="h2"
                component="h2"
                sx={{ ml: 1, fontSize: '3.5rem' }}
              >
                Money
              </Typography>
            </Box>
            <Typography
              variant="h4"
              component="h4"
              fontFamily={'Roboto'}
              color={'white'}
              fontSize={24}
              marginTop={5}
              textAlign={'center'}
            >
              Sua aplicação de conversão de moedas em tempo real, fácil e
              prático.
            </Typography>
          </ContainerGrid4>
          <ContainerGrid8>
            <ContainerLogin>
              {page === 'Entrar' ? <Login /> : <CreateUser />}
            </ContainerLogin>
          </ContainerGrid8>
        </ContainerFluid>
      </body>
    </>
  );
}
