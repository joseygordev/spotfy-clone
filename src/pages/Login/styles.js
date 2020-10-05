import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    backgroundColor: grey['900'],
    height: '100vh',
    placeItems: 'center',
  },
  img: {
    height: 200,
  },
  link: {
    color: grey['50'],
    textDecoration: 'none',
    padding: theme.spacing(2, 3),
    borderRadius: 99,
    fontWeight: 800,
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
