import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { RootContext } from '../../context/rootContext';

import { requestPlaylist } from '../../services/Api';
import { normarlizeString } from '../../services/Helpers';

import Body from '../../components/Body';
import Filter from '../../components/Filter';
import Header from '../../components/Header';

import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  const { auth } = useContext(RootContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [search, setSearch] = useState([]);
  const [termSearched, setTermSearched] = useState('');

  useEffect(() => {
    const getPlaylist = () => {
      requestPlaylist(auth.token).then(
        (resp) => {
          setPlaylist(resp?.playlists?.items);
          setLoading(false);
        },
        () => {
          setError(true);
          setLoading(false);
        }
      );
    };

    getPlaylist();
  }, [auth.token]);

  const onSubmitFilter = async (form) => {
    setLoading(true);

    let queryParams = '';
    Object.keys(form).forEach((field) => {
      if (form[field].value) {
        queryParams = `${queryParams}${queryParams ? '&' : ''}${field}=${
          form[field].value
        }`;
      }
    });

    requestPlaylist(auth.token, queryParams ? `?${queryParams}` : '').then(
      (resp) => {
        setPlaylist(resp?.playlists?.items);
        setLoading(false);
      },
      () => {
        setError(true);
        setLoading(false);
      }
    );
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const onChangeSearch = ({ target }) => {
    setTermSearched(target.value);

    setSearch(
      playlist.filter((item) =>
        normarlizeString(item.name).includes(normarlizeString(target.value))
      )
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onClick={handleDrawer} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {loading ? (
          <CircularProgress />
        ) : (
          <Body
            error={error}
            onChangeSearch={onChangeSearch}
            playlist={termSearched ? search : playlist}
          />
        )}
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
          <Typography variant="subtitle1" component="h2">
            Filtrar playlist
          </Typography>
        </div>
        <Divider />
        <Filter onClick={onSubmitFilter} />
      </Drawer>
    </div>
  );
}
