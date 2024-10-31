import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import React from 'react';

import {
  ContainerFluid,
  ContainerGrid4,
  ContainerGrid8,
  ContainerLogin,
} from '../../components/Container';
import { Header } from '../../components/Header';
import { BaseSignProps } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function BaseSign({ content }: BaseSignProps) {
  const navigate = useNavigate();
  const changePage = (page: string) => {
    if (page === 'Entrar') return navigate('/login');
    return navigate('/create-user');
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
            <ContainerLogin>{content}</ContainerLogin>
          </ContainerGrid8>
        </ContainerFluid>
      </body>
    </>
  );
}
