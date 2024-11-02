import React, { ReactNode } from 'react';

import BoxShadow from '../../components/BoxShadow';
import { Container, ContainerMedium } from '../../components/Container';
import { Description, Title } from '../../components/Typography';
import { FixedLogoContainer, Logo } from './styles';

type BaseSignProps = {
  title: string;
  description: string;
  icon: ReactNode;
  children: React.ReactNode;
};

export function BaseSign({ children, title, description , icon}: BaseSignProps) {
  return (
    <Container>
      <FixedLogoContainer>
        <Logo src={require('../../assets/logo.png')} />
      </FixedLogoContainer>
      <ContainerMedium>
        <BoxShadow>
          {icon}
        </BoxShadow>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BoxShadow style={{ marginTop: '50px' }}>{children}</BoxShadow>
      </ContainerMedium>
    </Container>
  );
}
