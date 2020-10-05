import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const SongRow = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={item.images[0].url} alt={item.name} />
      <div className={classes.info}>
        <h1 className={classes.name}>{item.name}</h1>
        <p className={classes.description}>{item.description}</p>
      </div>
    </div>
  );
};

SongRow.propTypes = {
  item: PropTypes.shape({
    images: PropTypes.shape([
      {
        url: PropTypes.string.isRequired,
      },
    ]),
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongRow;
