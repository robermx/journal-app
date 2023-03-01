import { createTheme } from '@mui/material';
import { deepPurple, indigo, red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: deepPurple[700],
    },
    error: {
      main: red.A400,
    },
    background: {
      light: indigo[50],
      dark: indigo[900],
    },
  },
});
