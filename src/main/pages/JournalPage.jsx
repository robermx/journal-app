import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { MainLayout } from '../layout/MainLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <MainLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'background.light',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.dark' },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </MainLayout>
  );
};
