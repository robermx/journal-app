import { Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export const AuthLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 2 }}
    >
      <Grid
        item
        sx={{ backgroundColor: deepPurple[50], padding: 2, borderRadius: 2, width: { sm: 450 } }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
