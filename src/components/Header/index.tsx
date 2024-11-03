import * as React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Description, TitleBold } from '../Typography';
import * as S from './styles';

type HeaderProps = React.ComponentProps<'header'> & {
  title: string;
  username: string;
};

export function Header({ title, username, children }: HeaderProps) {
  return (
    <S.HeaderS>
      <TitleBold>{title}</TitleBold>
      <S.DivS>
        <Description>{username}</Description>
        <FaUserCircle size={40} />
      </S.DivS>
    </S.HeaderS>
  );
}
