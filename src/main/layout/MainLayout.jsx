import { Box } from '@mui/material';

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'primary.main' }}>
      {/** Navbar */}
      {/** Sidebar */}
      <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
        {/** Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
