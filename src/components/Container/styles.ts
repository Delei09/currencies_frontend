import styled from 'styled-components';

export const Container = styled.i`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, ${(props) => props.theme.color.blueLight}, ${(props) => props.theme.color.green});
`

export const ContainerLoginS = styled.div`
  width: 40vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  background:${(props) => props.theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`

export const ContainerFormS = styled.form`
gap: 16px;
display: flex;
flex-direction: column;
align-items: center;
height: 300px;
justify-content: space-around;
padding: 16px 8px 32px 8px;
`

