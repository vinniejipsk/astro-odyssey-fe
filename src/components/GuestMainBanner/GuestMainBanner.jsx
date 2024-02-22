import React from 'react';
import { Box, Typography } from '@mui/material';

import backgroundImage from '../../assets/images/background/night_sky_edit.jpg'; 

export default function GuestMainBanner () {
  return (
    <Box
      sx={{
        display: 'flex', // Use flexbox layout
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        height: '200px',
        backgroundColor: 'rgba(24,54,94,0)', // Set the background color to dark blue
        color: 'white', // Set the text color to white for better contrast
        paddingTop: '9rem', // Add some padding for spacing inside the banner
        paddingBottom: '4rem', // Add some padding for spacing inside the banner
      }}
    >
      <Typography variant="h2" component="h1" 
        sx={{ 
          textAlign: 'center',
          fontWeight: '400',
          border: '3px solid white',
          borderRadius: '15px',
          paddingBlock: '1rem',
          paddingInline: '3rem',
        }}>
        AstroOdyssey
      </Typography>
      <Typography sx={{ fontSize: '18px', textAlign: 'center', mt: '20px' }} component="p">
        A Year Among The Stars
      </Typography>
    </Box>
  );
};
