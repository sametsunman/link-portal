import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
  background-color: #003788;
  z-index: 600;
  & > a {
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
  position: absolute;
    top: 15px;
    right: 50px;
  list-style-type: none;
  & > li {
    display: inline;
    margin-right: 5px;
  }
  & > li a {
    padding: 0 20px 0 0;
    color: #fff;
    text-decoration: none;
    border: 1px solid white;
    background: transparent;
    text-transform: uppercase;
    color: white;
    padding: 5px 10px;
    outline: none;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2px 0px #fffcfc;
    :hover {
      border: 1px solid #fffcfc;
      box-shadow: inset 0px 0px 6px 1px #fffcfc;
    },
  }
`;

export const Title = styled.h4`
  color: #fff;
  margin-left: 40px;
  text-decoration: none;`;