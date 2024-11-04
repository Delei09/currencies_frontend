import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { ContainerLogo } from '../../pages/components/styles';
import Logo from '../Logo';
import * as S from './styles';

type NavigationProps = {
  menuSelected?: 'home' | 'favorites';
} & ComponentProps<'nav'>;

export default function Navigation({ menuSelected }: NavigationProps) {
  return (
    <S.NavigationS>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <S.ListS>
        <S.ListItemS isSelected={menuSelected === 'home'}>
          <Link style={{ textDecoration: 'none' }} to="/home">
            Home
          </Link>
        </S.ListItemS>
        <S.ListItemS isSelected={menuSelected === 'favorites'}>
          <Link style={{ textDecoration: 'none' }} to="/favorites">
            Moedas Favoritas
          </Link>
        </S.ListItemS>
      </S.ListS>
    </S.NavigationS>
  );
}
