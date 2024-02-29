import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';

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
    username
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
      maxHeight: 400,
      paddingBlock: "10rem",
      paddingInline: "2rem",
      border: '1px solid rgba(255,255,255,0.5)',
      borderRadius: '0.5rem',
    }}
  >
    <CardContent>
      <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', marginBlock: "1rem" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
        Type: {type}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem"  }}>
        Date and Time: {dateTime}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem"  }}>
        Where to Observe : {locationObserve}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem"  }}>
        Visibility: {visibility}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem" }}>
        Magnitude: {magnitude}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem"  }}>
        Description: {description}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white', marginBlock: "1rem"  }}>
        Media: {media}
      </Typography>
    </CardContent>

    <CardActions 
      disableSpacing 
      sx={{ 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 16px', 
        marginTop: 'auto'
        }}>
      <Typography variant="body2" 
        sx={{ 
          color: 'white', 
          paddingBlock: "0.5rem", 
          border: "solid white", 
          borderRadius: "0.5rem", 
          width:"5rem", 
          textAlign: "center"
        }}>
        Posted by: {username}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button size="small" onClick={handleEditClick}>Learn More</Button>
      </Box>
    </CardActions>
  </Card>
);
}