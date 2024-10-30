import { Typography } from '@mui/material';
import React, { useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { User } from '../../../types';

export function CreateUser() {
  const [user, setUser] = useState<Partial<User>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const redirectToLogin = () => {
    console.log(user);
  };

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
      <Input
        label="Email"
        name="email"
        value={user.email ?? ''}
        onChange={handleChange}
      />
      <Input
        label="Usuario"
        name="username"
        value={user.username ?? ''}
        onChange={handleChange}
      />
      <Input
        label="Senha"
        name="password"
        value={user.password ?? ''}
        onChange={handleChange}
        type="password"
      />
      <Button onClick={redirectToLogin}>Criar</Button>
    </>
  );
}
