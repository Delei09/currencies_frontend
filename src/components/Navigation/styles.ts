import styled from 'styled-components';

export const NavigationS = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  z-index: 100;
  justify-content: flex-start;
`;

export const ListS = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const ListItemS = styled.li`
  padding: 8px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.white};

  &:hover {
    background: ${(props) => props.theme.color.primaryLight};
    color: ${(props) => props.theme.color.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
