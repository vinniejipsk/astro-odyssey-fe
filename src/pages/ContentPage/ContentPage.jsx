import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

import { getPost } from '../../api/posts';
import { fetchPostsData, fetchUserData } from "../../service/users";

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedPost = await getPost(postId);
  //       if (fetchedPost) {
  //         setPost(fetchedPost);
  //       }

  //       const token = localStorage.getItem('token');
  //       if (token) {
  //         const decoded = jwtDecode(token);
  //         if (decoded._id) {
  //           const userData = await fetchUserData(decoded._id);
  //           setUserData(userData);
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [postId, setUserData]);

  return (
    <>
      <Grid>
        {post && ( // Only attempt to render PostFormView if post data is available
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
              // name={userData.name}
            />
          </Grid>
        )}
      </Grid>
    </>
  );  
};
