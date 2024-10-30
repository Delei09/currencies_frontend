import { Typography } from '@mui/material';
import React from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

export function CreateUser() {
  return (
    <>
      <Typography
        fontSize={30}
        variant="h2"
        component="h2"
        fontFamily={'Roboto'}
      >
        Crie sua conta
      </Typography>
      <Input label="Email" />
      <Input label="Usuario" />
      <Input label="Senha" />
      <Button>Criar</Button>
    </>
  );
}
