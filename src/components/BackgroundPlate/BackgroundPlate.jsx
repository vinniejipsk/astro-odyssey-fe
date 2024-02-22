// BackgroundPlate.jsx
import React from 'react';
import { Box } from '@mui/material';

const BackgroundPlate = ({ children }) => {
  return (
    <Box
      sx={{
        minwidth: '100%',
        minHeight: '100%',
        bgcolor: 'black', // Use a theme color or specify a custom color
        color: 'white', // Sets the text color to white for contrast
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundPlate;


