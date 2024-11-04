import styled from "styled-components";

export const ContainerFavorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.body};
  width: (100% - 200px);
  margin-left: 200px;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
  }
`;