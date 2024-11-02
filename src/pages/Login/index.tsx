import React, { useState } from 'react';
import { CiLogin } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { ContainerForms } from '../../components/Container';
import Input from '../../components/Input';
import { Description } from '../../components/Typography';
import theme from '../../global/theme';
import { BaseSign } from '../components/BaseSign';

export function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      console.log('Login submitted', credentials);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setIsLoading(false);
    }
  };

  return (
    <BaseSign
      icon={<CiLogin size={60} />}
      title="Entre com seu email"
      description="Acesse para pegar dados de moedas em tempo real"
    >
      <ContainerForms onSubmit={handleSubmit}>
        <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
          <Input
            icon={<MdEmail size={20} />}
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <Input
            icon={<RiLockPasswordFill size={20} />}
            placeholder="Senha"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Link to="#" style={{ textDecoration: 'none', alignSelf: 'end' }}>
            <Description font="14" color={theme.color.blue}>
              Esqueceu a senha?
            </Description>
          </Link>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </Button>
      </ContainerForms>
      <Link
        to="/create-user"
        style={{
          textDecoration: 'none',
          alignSelf: 'center',
        }}
      >
        <Description font="14" color={theme.color.blue}>
          Não tem uma conta ainda? Cadastre-se agora
        </Description>
      </Link>
    </BaseSign>
  );
}

