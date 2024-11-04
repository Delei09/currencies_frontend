import styled from "styled-components";

export const ContainerChart = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 20px;
  background-color: ${(props) => props.theme.color.white};
  border: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

