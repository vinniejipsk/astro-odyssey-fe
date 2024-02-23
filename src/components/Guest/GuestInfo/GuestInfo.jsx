import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Button from '@mui/material/Button';

export default function GuestInfo() {
  return (
    <>
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
        <Typography sx={{ fontSize: '20px', textAlign: 'center' }} component="p">
            What is this website about?
        </Typography>
      </Box>
      <Grid container sx={{
        backgroundColor: 'rgba(104, 112, 124, 0.2)', // Set the background color
        color: 'white', // Set the text color to white for better contrast
        padding: '5vh',
        justifyContent: 'center', // Center the items horizontally
      }}>
        {/* Left-aligned Typography */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '10px', mb: '10px', maxWidth: '50%' }}>
            This website is a portal for astronomy enthusiasts to explore the night sky. Family and friends are welcome.
          </Typography>
        </Grid>

        {/* Right-aligned Typography */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '10px', mb: '10px', maxWidth: '50%' }}>
            Whether you're a beginner or an experienced stargazer, find everything needed to embark on your astronomical journey.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(104, 112, 124, 0.2)', // Set the background color to dark blue
        color: 'white', // Set the text color to white for better contrast
        marginTop: '5vh',
      }}>
        <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: '30px', mb: '20px', maxWidth: '25%' }} component="p">
          Sign up to check the latest astronomical stories and book your observations.
        </Typography>
        <Button
              type="submit"
              variant="contained"
              sx={{ mb: 1, backgroundColor: 'rgba(104, 112, 124, 0.5)', border: '2px soild white' }}
              component={Link}
              to="/register"
        >
          Sign Up
        </Button>
        <Grid item sx={{ mb: '30px', mt: '10px' }}>
          <RouterLink to="/login" style={{ textDecoration: 'none', color: 'lightblue' }}>
            Already have an account? Sign in
          </RouterLink>
        </Grid>
      </Grid>
    </>
  );
};
