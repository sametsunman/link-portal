import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routeConfig';
import { Wrapper } from './index.styles';


const Content = () => {

  return (
    <Wrapper>
      <Switch>
      {routes.map((route) =>
            <Route exact={route.exact} path={route.path}>
              {route.component()}
            </Route>
        )}
      </Switch>
    </Wrapper>
  );
};

export default Content;