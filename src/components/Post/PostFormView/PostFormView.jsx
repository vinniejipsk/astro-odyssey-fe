import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActions, CardMedia } from '@mui/material';

export default function PostFormView(props) {

  const { userId, title, type, dateTime, locationObserve, visibility, magnitude, description, media, username } = props;
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleEditClick = () => navigate(`/posts/${postId}/edit`);

  const imagePath = `/images/astro/${media}.jpg`;

  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname; 

  const handleCopy = async () => {
    try {
      // Copy the URL to the clipboard
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true); // Update state to change the button label to "Copied!"
      setTimeout(() => setCopied(false), 3000); // Reset the button label after 3 seconds
    } catch (error) {
      console.error('Error copying:', error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '0.5rem',
        overflow: 'visible',
        padding: "2rem",
        margin: "auto",
        maxWidth: 800,
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          paddingBlock: "2rem",
          paddingInline: "2rem",
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '0.5rem',
          overflow: 'visible',
          m: 2,
        }}
      >
        <CardContent sx={{ overflow: 'auto' }}>
          <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', marginBlock: "1rem" }}>
            {title}
          </Typography>
          {type && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Type: {type}
            </Typography>
          )}
          {dateTime && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Date and Time: {dateTime}
            </Typography>
          )}
          {locationObserve && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Where to Observe: {locationObserve}
            </Typography>
          )}
          {visibility && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Visibility: {visibility}
            </Typography>
          )}
          {magnitude && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Magnitude: {magnitude}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
              Description: {description}
            </Typography>
          )}
          <CardMedia
            component="img"
            height="auto"
            image={imagePath}
            alt={title}
            sx={{ marginBlock: "2rem" }}
          />
        </CardContent>

        <CardActions disableSpacing sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginTop: 'auto' }}>
          <Typography variant="body2" sx={{ color: 'white', paddingBlock: "0.5rem", border: "solid white", borderRadius: "0.5rem", width:"5rem", textAlign: "center" }}>
            Posted by: {username}
          </Typography>
          {userId && (
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button size="small" onClick={handleEditClick}>Edit</Button>
            </Box>
          )}
          <Button variant="contained" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Share'}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
