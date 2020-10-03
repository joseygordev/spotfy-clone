import React, {useEffect} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {SPOTFY_API_BASE} from '../../constants/config';

import Filter from '../../components/Filter';

import useStyles from './styles';

export default function PersistentDrawerRight({token = 'BQBkfqQ-_-s215MvYankRc4wZ2shHtZjxuAD-MVgwffF4ILEu42rYXy6pJUSlDu9dZSEskhkt_g_taPjSfG8mYBdhwz2hLyfBuqWdNpmyButg3_I5X6WCFLh_Yq1l9dcCqvCovrr-tAosp8lvMwBSEEvm9Td8AtKOZI'}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetch(SPOTFY_API_BASE, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('========= data =========', data)
    }, err => {
      console.log('========= err =========', err)
    });

  }, [token]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            onClick={handleDrawer}
            className={clsx(open && classes.hide)}
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          CONTENT
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <Filter />
      </Drawer>
    </div>
  );
}