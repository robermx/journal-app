import { Grid } from '@mui/material';
import { ButtonComponent, InputComponent, LinkComponent, TitleComponent } from '../components';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <TitleComponent title="Login" />
      <form>
        <Grid container>
          <InputComponent label="Email" type="email" placeholder="mail@mail.com" />
          <InputComponent label="Password" type="password" placeholder="mail@mail.com" />
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <ButtonComponent value="Login" />
            <ButtonComponent icon={true} value="Google" />
          </Grid>
          <LinkComponent textLink="Register Account" path={'/auth/register'} />
        </Grid>
      </form>
    </AuthLayout>
  );
};
