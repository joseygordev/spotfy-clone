import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1db954',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: '#ffffff !important',
      },
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#000000',
        color: '#ffffff',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: 'rgba(0, 0, 0, 0.23) !important',
      },
    },
  },
});

export default {
  ...theme,
};
