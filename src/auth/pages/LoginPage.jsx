import { Google } from '@mui/icons-material';
import { Grid } from '@mui/material';
import {
  ButtonComponent,
  InputComponent,
  LinkComponent,
  TitleComponent,
} from '../../components';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <TitleComponent title="Login" />
      <form>
        <Grid container>
          <InputComponent
            label="Email"
            type="email"
            placeholder="mail@mail.com"
          />
          <InputComponent
            label="Password"
            type="password"
            placeholder="mail@mail.com"
          />
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <ButtonComponent gridMd={6} fullWidth title="Login" />
            <ButtonComponent
              gridMd={6}
              fullWidth
              icon={Google}
              title="Google"
            />
          </Grid>
          <LinkComponent
            text="Create an"
            textLink="Account"
            path={'/auth/register'}
          />
        </Grid>
      </form>
    </AuthLayout>
  );
};
