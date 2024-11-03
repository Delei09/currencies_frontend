import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

export const FixedLogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 16px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  animation: ${animation} 3s ease-in infinite alternate;
`;

export const ContainerLogo = styled.div`
  width: 100%;
`;
