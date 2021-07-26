import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ClientRegistration from './pages/ClientRegistration/index';
import ClientList from './pages/ClientRegistration/ClientList/index';

import Home from './pages/Home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clientRegister" exact component={ClientRegistration} />
        <Route path="/clientRegister/clientList" exact component={ClientList} />
      </Switch>
    </BrowserRouter>
  );
}
