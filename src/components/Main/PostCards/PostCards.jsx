import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getPosts } from "../../../api/posts";
import { Link } from 'react-router-dom';

export default function SocialPostCard(props) {
  const { title, description, postId } = props;

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
      }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {description}
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