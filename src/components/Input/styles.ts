import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  color: ${(props) => props.theme.color.black};
`;

export const StyledIcon = styled(StyledInput)`
  border:none;
  border-radius: 5px;
  padding: 0px;
  width: 25px;
  color: ${(props) => props.theme.color.black};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
`;

export const Icon = styled.div`
  position: absolute;
  left: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.color.black};
`;

