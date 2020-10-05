import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Search from '../Search';
import SongRow from '../SongRow';

import useStyles from './styles';

const Body = ({ playlist, error, onChangeSearch }) => {
  const classes = useStyles();

  const renderError = () => (
    <Typography align="center" variant="h4">
      Algo deu errado, tente novamente!
    </Typography>
  );

  const renderEmpty = () => (
    <Typography align="center" variant="h4">
      Nenhum resultado encontrado!
    </Typography>
  );

  const renderPlaylist = () =>
    playlist.length
      ? playlist.map((item) => <SongRow key={item.id} item={item} />)
      : renderEmpty();

  return (
    <div className={classes.root}>
      {!error && <Search onChange={onChangeSearch} />}
      <div className={classes.container}>
        {error ? renderError() : renderPlaylist()}
      </div>
    </div>
  );
};

Body.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  error: PropTypes.bool,
  onChangeSearch: PropTypes.func,
};

Body.defaultProps = {
  playlist: [],
  error: false,
  onChangeSearch: () => {},
};

export default Body;
