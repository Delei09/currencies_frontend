import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 32px 0;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.body};
  width: (100% - 200px);
  height: 100vh;
  margin-left: 200px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
  }
`;
