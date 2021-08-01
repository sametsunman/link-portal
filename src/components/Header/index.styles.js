import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
  background-color: #800000;
  z-index: 600;
`;

export const Menu = styled.ul`
  position: absolute;
    top: 15px;
    right: 50px;
  list-style-type: none;
  & > li {
    display: inline;
  }
  & > li a {
    padding: 0 20px 0 0;
    color: #fff;
  }
`;

export const Title = styled.h3`
  color: #fff;
  margin-left: 40px;`;