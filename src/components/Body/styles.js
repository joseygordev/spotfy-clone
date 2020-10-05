import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    width: '100%',
    height: '100vh',
    overflowY: 'overlay',
    overflowX: 'hidden',
    flex: 1,
    color: grey['50'],
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 1))',
    backgroundColor: 'rgb(91, 87, 115)',
    position: 'relative',
  },
  container: {
    margin: `${theme.spacing(2.5)}px -${theme.spacing(4)}px`,
  },
}));

export default useStyles;
