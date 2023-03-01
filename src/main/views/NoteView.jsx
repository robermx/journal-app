import { SaveOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { ButtonComponent, InputComponent } from '../../components';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid container justifyContent="space-between" sx={{ mb: 1, p: 3 }}>
      <Grid item>
        <Typography fontSize={30} fontWeight="light">
          August 20th, 2023
        </Typography>
      </Grid>
      <Grid item>
        <ButtonComponent title="save" icon={SaveOutlined} />
      </Grid>
      <Grid container sx={{ mt: 3 }}>
        <InputComponent
          label="Note Title"
          type="text"
          placeholder="Create a new title"
        />
        <InputComponent
          minRows={5}
          multiline
          type="text"
          placeholder="What`s up today"
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
