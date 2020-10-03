import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 16,
    flex: 1
  },
  containerField: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    marginBottom: 16,
    padding: '8px 0',
  },
  containerSelect: {
    flex: 1
  },
  select: {
    display: 'flex',
    flex: 1,
    marginBottom: 16,
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
  }
}));

export default useStyles;