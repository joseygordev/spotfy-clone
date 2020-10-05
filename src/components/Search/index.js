import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

const Search = ({ onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        onChange={onChange}
        id="standard-search"
        className={classes.search}
        label="Busca"
        type="search"
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};

export default Search;
