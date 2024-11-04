import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid ${({ theme }) => theme.color.primaryLight}; 
  border-top: 8px solid ${({ theme }) => theme.color.primary}; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
