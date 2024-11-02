import styled from 'styled-components';

export const Shadow = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  border-radius: 10px;
  background: ${(props) => props.theme.color.white};
  padding: 10px;
`