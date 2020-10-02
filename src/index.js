import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import * as serviceWorker from './serviceWorker';

import { getTokenFromResponse } from "./services/Spotfy";

const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

ReactDOM.render(
  <React.StrictMode>
    {_token ? <Home token={_token} /> : <Login />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
