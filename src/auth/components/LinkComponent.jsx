import { Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LinkComponent = ({ textLink, path }) => {
  return (
    <Grid container direction="row" justifyContent="end">
      <Link component={RouterLink} color="secondary" to={path}>
        {textLink}
      </Link>
    </Grid>
  );
};
