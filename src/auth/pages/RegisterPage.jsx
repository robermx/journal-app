import { Grid } from '@mui/material';
import {
  ButtonComponent,
  InputComponent,
  LinkComponent,
  TitleComponent,
} from '../../components';

import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <TitleComponent title="Create an Account" />
      <form>
        <Grid container>
          <InputComponent
            label="Complete Name"
            type="text"
            placeholder="Your Name"
          />
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
            <ButtonComponent title="Sign up" fullWidth />
          </Grid>
          <LinkComponent
            text="Already"
            textLink="Registered"
            path={'/auth/login'}
          />
        </Grid>
      </form>
    </AuthLayout>
  );
};
