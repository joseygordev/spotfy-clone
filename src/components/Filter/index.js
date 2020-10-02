import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import {SPOTFY_API_FILTER} from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Filter() {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    fetch(SPOTFY_API_FILTER)
    .then(response => response.json())
    .then(data => {
      console.log('========= data =========', data.filters)
      setFilters(data.filters)
    }, err => {
      console.log('========= err =========', err)
    });

  }, []);
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const renderItem = (item) => {
    return (
      <ListItem key={item.id}>
        <ListItemText id={`switch-list-label-${item.id}`} primary={item.name} />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle(item.id)}
            checked={checked.indexOf(item.id) !== -1}
            inputProps={{ 'aria-labelledby': `switch-list-label-${item.id}` }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  const renderItemWithValues = (filter) => {
    return (
      <div key={filter.id}>
        <Typography style={{marginLeft: 16}}>{filter.name}</Typography>
        {filter.values.map((filter) => renderItem({
          ...filter,
          id: filter.value,
        }))}
      </div>
    )
  }

  return (
    <List className={classes.root}>
      <Typography variant="subtitle1" component="h2">Filters</Typography>
      {filters.map((filter) => filter.values ? renderItemWithValues(filter) : renderItem(filter))}
    </List>
  );
}