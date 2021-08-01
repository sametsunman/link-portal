import styled from 'styled-components';

export const Tr = styled.tr`
  :hover {
    background-color: lightgreen;
  }
  :hover > td > span> span{
    display: unset;
  },
`;

export const Td = styled.td`
  min-width: 100px
`;

export const Button = styled.span`
  cursor: pointer;
  :hover {
    font-size: large;
  },
`;

export const RemoveCol = styled.span`
  display: none
`;

export const ToastContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 5px;
`;

