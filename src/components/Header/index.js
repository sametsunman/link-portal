import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routeConfig';
import { Wrapper, Title, Menu } from './index.styles';


const Header = () => {
  return (
    <Wrapper>
      <Link to="/"><Title>Bağlantı Portalı</Title></Link>
      <Menu>
        {routes
          .map((route) => (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
      </Menu>
    </Wrapper>
  );
};

export default Header;