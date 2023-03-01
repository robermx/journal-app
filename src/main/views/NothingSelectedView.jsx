import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'primary.main',
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'background.light' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" color="background.light">
          Create or select a note
        </Typography>
      </Grid>
    </Grid>
  );
};
