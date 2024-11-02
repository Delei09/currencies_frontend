import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { ContainerForms } from '../../components/Container';
import Input from '../../components/Input';
import { Description } from '../../components/Typography';
import theme from '../../global/theme';
import { User } from '../../types';
import { BaseSign } from '../components/BaseSign';

export function CreateUser() {
  const [user, setUser] = useState<Partial<User>>({
    email: '',
    password: '',
    username: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      console.log(user);
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseSign
      icon={<IoIosCreate size={60} />}
      title="Crie sua conta"
      description="Faça parte e tenha acesso a dados de moedas em tempo real"
    >
      <ContainerForms onSubmit={handleSubmit}>
        <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
          <Input
            icon={<FaUser size={20} />}
            placeholder="Usuario"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <Input
            icon={<MdEmail size={20} />}
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input
            icon={<RiLockPasswordFill size={20} />}
            placeholder="Senha"
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
          />
          <Link
            to="/login"
            style={{ textDecoration: 'none', alignSelf: 'end' }}
          >
            <Description font="14" color={theme.color.blue}>
              Ja tem uma conta? Entre
            </Description>
          </Link>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </ContainerForms>
    </BaseSign>
  );
}
