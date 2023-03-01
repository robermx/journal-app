import { Grid, TextField } from '@mui/material';

export const InputComponent = ({
  label,
  type,
  placeholder,
  multiline,
  minRows,
}) => {
  return (
    <Grid item xs={12} sx={{ mb: 3 }}>
      <TextField
        multiline={multiline}
        label={label}
        type={type}
        placeholder={placeholder}
        fullWidth
        minRows={minRows && minRows}
      />
    </Grid>
  );
};
