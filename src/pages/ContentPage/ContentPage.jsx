import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

import { getPost } from '../../api/posts';

import PostFormView from '../../components/Post/PostFormView/PostFormView';

export default function ContentPage () {

  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPost = await getPost(postId);
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <>
      <Grid sx ={{ mt: '10rem', }}>
        {post && ( // Only attempt to render PostFormView if post data is available
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <PostFormView
              title={post.title}
              description={post.description}
              postId={post._id} // Assuming the post object has an _id property
            />
          </Grid>
        )}
      </Grid>
    </>
  );  
};
