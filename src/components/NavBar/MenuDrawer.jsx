import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        bgcolor: 'black',
        color: 'white',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItemButton component={Link} to="/" key="Home">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton key="Gallery">
          <ListItemText primary="Gallery" sx={{ color: 'gray' }} />
        </ListItemButton>
        <ListItemButton key="Perks">
          <ListItemText primary="Perks" sx={{ color: 'gray' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/schedule" key="Schedule Observations">
          <ListItemText primary="Schedule Observations" />
        </ListItemButton>
      </List>
      <Divider sx={{ bgcolor: 'gray' }} />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
            onClick={toggleDrawer('right', true)}
            sx={{ 
              fontSize: '16px',
              color: 'white',
              display: "flex", 
              alignItems: "center",
              border: '1px solid white', // Add border, specify color as needed
              padding: '2.5px 10px',
              marginInline: '0.5rem',
            }}
            
          >
            Menu
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              '& .MuiDrawer-paper': { // Target the Paper component inside Drawer
                bgcolor: 'black', // Set the entire drawer's background color to black
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}