import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  token: '',
  lastUpdate: new Date(),
};

const reducer = (auth, newAuth) => {
  if (newAuth === null) {
    localStorage.removeItem('auth');
    return initialState;
  }
  return { ...auth, ...newAuth };
};

const localState = JSON.parse(localStorage.getItem('auth'));

const RootContext = React.createContext();

function RootProvider({ children }) {
  const [auth, setAuth] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <RootContext.Provider value={{ auth, setAuth }}>
      {children}
    </RootContext.Provider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RootContext, RootProvider };
