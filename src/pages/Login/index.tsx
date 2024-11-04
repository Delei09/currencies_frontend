import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CiLogin } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import { ContainerForms } from '../../components/Container';
import Input from '../../components/Input';
import { Description } from '../../components/Typography';
import { URL_BASE } from '../../constants';
import { useUser } from '../../context/user';
import theme from '../../global/theme';
import { BaseSign } from '../components/BaseSign';
import Loading from '../../components/Loading';

export function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL_BASE}/auth/login`, credentials);
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

      setUser(response.data.user);
      toast.success('Login realizado com sucesso!');

      setTimeout(() => {
        navigate('/home');
      }, 2000);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Email ou senha inválidos!');
      setIsLoading(false);
    }
  };

  return (
    <BaseSign
      icon={<CiLogin size={60} />}
      title="Entre com seu usuário e senha"
      description="Acesse para pegar dados de moedas em tempo real"
    >
      <ContainerForms onSubmit={handleSubmit}>
        <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
          <Input
            icon={<FaUser size={20} />}
            placeholder="Usuario"
            name="username"
            value={credentials.username}
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
            <Description font="14" color={theme.color.primary}>
              Esqueceu a senha?
            </Description>
          </Link>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loading /> : 'Entrar'}
        </Button>
      </ContainerForms>
      <Link
        to="/create-user"
        style={{
          textDecoration: 'none',
          alignSelf: 'center',
        }}
      >
        <Description font="14" color={theme.color.primary}>
          Não tem uma conta ainda? Cadastre-se agora
        </Description>
      </Link>
    </BaseSign>
  );
}
