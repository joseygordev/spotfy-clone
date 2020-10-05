import React from 'react';

import { accessUrl } from '../../services/Spotfy';

import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a className={classes.link} href={accessUrl}>
        LOGIN
      </a>
    </div>
  );
};

export default Login;
