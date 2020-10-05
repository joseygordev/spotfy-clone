import React, { useEffect, useContext } from 'react';

import { getTokenFromResponse } from './services/Spotfy';
import { checkRefresh } from './services/Helpers';

import { RootContext } from './context/rootContext';

import Home from './pages/Home';
import Login from './pages/Login';

const Router = () => {
  const { auth, setAuth } = useContext(RootContext);

  const hash = getTokenFromResponse();

  useEffect(() => {
    checkRefresh(auth, hash.access_token);
  }, [auth, hash.access_token]);

  useEffect(() => {
    if (hash.access_token) {
      window.location.hash = '';
      setAuth({ token: hash.access_token, lastUpdate: new Date() });
    }
  }, [hash.access_token, setAuth]);

  return auth.token ? <Home /> : <Login />;
};

export default Router;
