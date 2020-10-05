import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { RootProvider } from './context/rootContext';

import * as serviceWorker from './serviceWorker';

import theme from './constants/theme';

import Router from './router';

import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RootProvider>
        <Router />
      </RootProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
