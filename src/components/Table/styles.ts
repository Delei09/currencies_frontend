import styled from 'styled-components';

//TODO: FALTA DEIXAR RESPONSIVO
export const TableContainer = styled.div`
  overflow-x: auto; 
`;

export const TableS = styled.table`
  border-collapse: collapse;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  border: 1px solid ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  min-height: 30vh;
  max-height: 30vh;
`;

export const TableRowS = styled.tr`
  &:nth-child(even) {
    background: ${(props) => props.theme.color.primaryLight};
  }

  &:nth-child(odd) {
    background: ${(props) => props.theme.color.white};
  }

  > th, td {
    border-left: 1px solid ${(props) => props.theme.color.primary};
    text-align: center;
  }
`;

export const TableHeaderS = styled.th`
  padding: 12px;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  background: ${(props) => props.theme.color.primaryLight};
  color: ${(props) => props.theme.color.white};
`;

export const TableCellS = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.black};
  text-align: center;
`;
