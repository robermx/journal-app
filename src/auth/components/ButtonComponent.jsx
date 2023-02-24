import { Button, Grid, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const ButtonComponent = ({ icon, value }) => {
  return (
    <Grid item xs={12} md={6}>
      <Button variant="contained" fullWidth>
        {icon && <Google />}
        <Typography sx={icon ? { ml: 1 } : { ml: 0 }}>{value}</Typography>
      </Button>
    </Grid>
  );
};
