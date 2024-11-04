import styled from 'styled-components';

export const HeaderS = styled.header`
  position: fixed;
  top: 0;
  left: 200px;
  width: calc(100% - 200px);
  height: 60px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  background: ${(props) => props.theme.color.body};

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding:16px
  }
`;

export const DivS = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
