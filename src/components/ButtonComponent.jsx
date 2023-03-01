import { Button, Grid, Typography } from '@mui/material';

export const ButtonComponent = ({
  icon,
  title,
  gridMd,
  colorIcon = 'background.light',
  fullWidth,
}) => {
  const IconStatus = icon;
  return (
    <Grid item xs={12} md={gridMd ? gridMd : 12}>
      <Button disableRipple variant="contained" fullWidth={fullWidth}>
        {icon && <IconStatus sx={{ color: colorIcon }} />}
        <Typography sx={icon ? { ml: 1 } : { ml: 0 }}>{title}</Typography>
      </Button>
    </Grid>
  );
};
