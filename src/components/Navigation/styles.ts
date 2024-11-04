import styled from 'styled-components';

export const NavigationS = styled.nav`
  position: fixed;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 200px;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    padding: 0;
    top:60px;
    flex-direction: row;
    justify-content: space-around;
  }
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

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

export const ListItemS = styled.li<{ isSelected: boolean }>`
  padding: 8px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
  background: ${(props) => props.isSelected && props.theme.color.primaryLight};

  color: ${(props) => props.theme.color.white};

  &:hover {
    background: ${(props) => props.theme.color.second};
    color: ${(props) => props.theme.color.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 0 16px;
  }
`;

