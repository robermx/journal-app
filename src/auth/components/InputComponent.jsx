import { Grid, TextField } from '@mui/material';

export const InputComponent = ({ label, type, placeholder }) => {
  return (
    <Grid item xs={12} sx={{ mb: 3 }}>
      <TextField label={label} type={type} placeholder={placeholder} fullWidth />
    </Grid>
  );
};
