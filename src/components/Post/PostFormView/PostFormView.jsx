import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostFormView(props) {

  const { 
    title, 
    type, 
    dateTime, 
    locationObserve, 
    visibility,
    magnitude,
    description,
    media,
    // name
  } = props;
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/posts/${postId}/edit`);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 800,
        bgcolor: 'rgba(0, 0, 0, 0.5)', 
        maxheight: 400, 
        paddingBlock: "10rem",
        paddingInline: "2rem",
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '0.5rem',
      }}>
      <Button onClick={handleEditClick}>Edit</Button>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
        Type: {type}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Title: {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Date and Time: {dateTime}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Where to Observe : {locationObserve}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Visibility: {visibility}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Magnitude: {magnitude}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Description: {description}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        Media: {media}
      </Typography>
      {/* <Typography variant="body2" sx={{ color: 'white' }}>
        Posted by: {name}
      </Typography> */}
      </CardContent>
    </Card>
  );
}