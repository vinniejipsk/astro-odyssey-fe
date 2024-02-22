import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';

export default function GuestInfo () {
  return (
    <>
    <Grid
      sx={{
        display: 'flex', // Use flexbox layout
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'rgba(104, 112, 124, 0.2)', // Set the background color to dark blue
        color: 'white', // Set the text color to white for better contrast
        padding: '3vh',
      }}
    >
      <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '10px', mb: '10px', maxWidth: '50%' }} component="p">
        This website is a portal for astronomy enthusiasts to explore the night sky. 
      </Typography>
      <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '10px', mb: '10px', maxWidth: '50%' }} component="p">
        Discover educational content on celestial phenomena, plan your observations and personalize your experience through a user profile. 
      </Typography>
      <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '10px', mb: '10px', maxWidth: '50%' }} component="p">
        Whether you're a beginner or an experienced stargazer, find everything needed to embark on your astronomical journey.
      </Typography>
    </Grid>
    <Grid
      sx={{
        display: 'flex', // Use flexbox layout
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'rgba(104, 112, 124, 0.2)', // Set the background color to dark blue
        color: 'white', // Set the text color to white for better contrast
        marginTop: '5vh',
      }}
    >
      <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '30px', mb: '30px', maxWidth: '25%' }} component="p">
        Sign up to check the latest astronomical stories and book your observations.
      </Typography>
    </Grid>
    </>
  );
};
