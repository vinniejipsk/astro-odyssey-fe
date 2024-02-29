import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import { getPost } from '../../api/posts';
// import { fetchPostsData, fetchUserData } from "../../service/users";

import PostFormView from '../../components/Post/PostFormView/PostFormView';

export default function ContentPage ({ userData, setUserData }) {

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
      <Grid>
        {post && (
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <PostFormView
              title={post.title}
              type={post.type}
              postId={post._id}
              dateTime={post.dateTime}
              locationObserve={post.locationObserve}
              visibility={post.visibility}
              magnitude={post.magnitude}
              description={post.description}
              media={post.media}
              username={post.username}
            />
          </Grid>
        )}
      </Grid>
    </>
  );  
};
