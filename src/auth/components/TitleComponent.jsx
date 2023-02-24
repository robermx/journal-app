import { Typography } from '@mui/material';

export const TitleComponent = ({ title = '' }) => {
  return (
    <Typography variant="h5" sx={{ mb: 2 }}>
      {title}
    </Typography>
  );
};
