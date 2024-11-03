import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: ${(props) => props.theme.color.primaryLight};
  color: ${(props) => props.theme.color.white};
  text-transform: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
  }

`;

