import { Typography } from '@mui/material';
import React from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

export function Login() {
  return (
    <>
      <Typography
        fontSize={30}
        variant="h2"
        component="h2"
        fontFamily={'Roboto'}
      >
        Acesse a plataforma
      </Typography>
      <Input label="Usuario" />
      <Input label="Senha" />
      <Button>Login</Button>
    </>
  );
}
