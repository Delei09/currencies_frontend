import { Typography } from '@mui/material';
import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { User } from '../../types';
import BaseSign from '../components/BaseSign';

export function Login() {
  const [user, setUser] = useState<Partial<User>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    console.log(user);
  };

  return (
    <BaseSign
      content={
        <>
          <Typography
            fontSize={30}
            variant="h2"
            component="h2"
            fontFamily={'Roboto'}
          >
            Acesse a plataforma
          </Typography>
          <Input
            id="Usuario"
            label="Usuario"
            name="username"
            value={user.username ?? ''}
            onChange={handleChange}
          />
          <Input
            id="Senha"
            label="Senha"
            name="password"
            type="password"
            onChange={handleChange}
            value={user.password ?? ''}
          />
          <Button onClick={handleLogin}>Login</Button>
        </>
      }
    />
  );
}
