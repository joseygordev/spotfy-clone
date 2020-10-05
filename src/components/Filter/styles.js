import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    flex: 1,
  },
  containerField: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    marginBottom: theme.spacing(2),
  },
  containerSelect: {
    flex: 1,
  },
  select: {
    display: 'flex',
    flex: 1,
    marginBottom: theme.spacing(2),
  },
  button: {
    minWidth: '100%',
    display: 'flex',
  },
  containerError: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'center',
  },
  errorMessage: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));

export default useStyles;
