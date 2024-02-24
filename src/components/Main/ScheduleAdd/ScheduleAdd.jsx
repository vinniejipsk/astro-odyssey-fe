import React from 'react';
import Button from '@mui/material/Button';
import { Box, Card, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

export default function ScheduleAdd () {

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ 
        bgcolor: 'rgba(0, 0, 0, 0.5)', 
        maxHeight: 400, 
        padding: "1rem",
        margin: "auto", 
        maxWidth: "100%",
        marginBottom: '2rem',
      }}
    >
      <Grid item xs={12} sm={4}>
        <Link to="/schedule" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              border: '1px solid white',
              fontSize: '10px',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            Schedule Your Observation
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={true} sx={{ textAlign: 'center', padding: '0 1rem' }}>
        <Typography
          sx={{
            fontSize: '17px',
            color: 'white',
          }}
        >
          Welcome Explorer
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              border: '1px solid white',
              fontSize: '10px',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            Add a Post +
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}