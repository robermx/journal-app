import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LinkComponent = ({ text, textLink, path }) => {
  return (
    <Grid container direction="row" justifyContent="end">
      <Typography sx={{ mr: 0.6 }}>{text}</Typography>
      <Link sx={{ fontWeight: 700 }} component={RouterLink} color="secondary" to={path}>
        {textLink}
      </Link>
    </Grid>
  );
};
