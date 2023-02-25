import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Drawer,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  ListItemText,
} from '@mui/material';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6">Roberto Arenas</Typography>
        </Toolbar>
        <Divider />
        <List>
          {['January', 'February', 'March', 'April'].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={month} />
                  <ListItemText
                    secondary={'A simple text, there are many texts'}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
