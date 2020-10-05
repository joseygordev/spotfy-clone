import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

import useStyles from './styles';

const Header = ({ open, onClick }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          Spotify
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={onClick}
          className={clsx(open && classes.hide)}
        >
          <FilterListIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  open: false,
  onClick: () => {},
};

export default Header;
