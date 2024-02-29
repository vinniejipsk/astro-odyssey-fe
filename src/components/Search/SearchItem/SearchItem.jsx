import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function SearchItem(props) {
  const { title, description, type, username, postId } = props;

  return (
    <Card 
      sx={{ 
        maxWidth: 1000,
        bgcolor: 'rgba(0, 0, 0, 0.5)', 
        maxheight: 400, 
        paddingBlock: "3rem",
        paddingInline: "2rem",
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '0.5rem',
      }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', margin: "1rem" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', margin: "1rem" }}>
            {type}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'white', margin: "1rem" }}>
            {description}
          </Typography> */}
          <Typography variant="body2" sx={{ 
            color: 'white', 
            paddingBlock: "0.5rem", 
            border: "solid white", 
            borderRadius: "0.5rem", 
            width:"5rem", 
            textAlign: "center"
          }}>
            {username}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/posts/${postId}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
    </Card>
  );
}