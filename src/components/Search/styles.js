import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
    flex: 1,
    padding: theme.spacing(),
    borderRadius: 30,
    alignItems: 'center',
  },
  search: {
    border: 'none',
    width: '100%',
  },
}));

export default useStyles;
