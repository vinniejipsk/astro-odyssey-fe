import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function UserSinglePost(props) {
  const { title, description } = props;

  return (
    <Card 
      sx={{ 
        maxWidth: 750,
        bgcolor: 'rgba(0, 0, 0, 0.5)', 
        maxheight: 400, 
        paddingBlock: "3rem",
        paddingInline: "2rem",
      }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Link to={`/posts/${postId}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}