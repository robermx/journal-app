import { Button, Grid, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const ButtonComponent = ({ googleIcon, value, fullButton }) => {
  return (
    <Grid item xs={12} md={fullButton ? 12 : 6}>
      <Button variant="contained" fullWidth>
        {googleIcon && <Google />}
        <Typography sx={googleIcon ? { ml: 1 } : { ml: 0 }}>{value}</Typography>
      </Button>
    </Grid>
  );
};
