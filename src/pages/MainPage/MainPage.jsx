import React from 'react';

import { Box, Typography } from '@mui/material';

import GuestMainBanner from '../../components/GuestMainBanner/GuestMainBanner';
import GuestInfo from '../../components/GuestInfo/GuestInfo';

export default function MainPage () {
  return (
    <>
      <GuestMainBanner />
      <Box
        sx={{
          display: 'flex', // Use flexbox layout
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          color: 'white', // Set the text color to white for better contrast
          paddingTop: '1.25rem', // Add some padding for spacing inside the banner
          paddingBottom: '1.25rem', // Add some padding for spacing inside the banner
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        }} 
      >
      <Typography sx={{ fontSize: '22px', textAlign: 'center' }} component="p">
          What is this website about?
      </Typography>
      </Box>
      <GuestInfo />
    </>
  );
};
