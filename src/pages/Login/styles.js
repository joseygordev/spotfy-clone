import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    backgroundColor: 'black',
    height: '100vh',
    placeItems: 'center'
  },
  img: {
    height: 200,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: 20,
    borderRadius: 99,
    fontWeight: 800,
    backgroundColor: '#1db954',
  }
}));

export default useStyles;