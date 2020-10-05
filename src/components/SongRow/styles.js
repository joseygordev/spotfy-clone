import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2.5),
    padding: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    color: grey['50'],
    '&:hover': {
      backgroundColor: grey['900'],
      opacity: 0.8,
    },
  },
  image: {
    height: 50,
    width: 50,
  },
  info: {
    marginLeft: theme.spacing(2.5),
  },
  name: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginTop: theme.spacing(0.5),
    color: grey['500'],
  },
}));

export default useStyles;
