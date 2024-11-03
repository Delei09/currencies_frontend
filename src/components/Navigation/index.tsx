import React, { ComponentProps } from 'react';

import { ContainerLogo } from '../../pages/components/styles';
import Logo from '../Logo';
import * as S from './styles';
import { Link } from 'react-router-dom';

type NavigationProps = ComponentProps<'nav'>;
export default function Navigation({ children }: NavigationProps) {
  return (
    <S.NavigationS>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <S.ListS>
        <S.ListItemS>
          <Link style={{ textDecoration: 'none' }} to="/home">
            Home
          </Link>
        </S.ListItemS>
        <S.ListItemS>
          <Link style={{ textDecoration: 'none' }} to="/favorites">
            Moedas Favoritas
          </Link>
        </S.ListItemS>
      </S.ListS>
    </S.NavigationS>
  );
}
