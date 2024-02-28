import React, { useEffect, useState } from 'react';

import GuestMainBanner from '../../components/Guest/GuestMainBanner/GuestMainBanner';
import GuestInfo from '../../components/Guest/GuestInfo/GuestInfo';

import UserMainBanner from '../../components/User/UserMainBanner/UserMainBanner';
import ScheduleAdd from '../../components/Main/ScheduleAdd/ScheduleAdd';
import PostCards from '../../components/Main/PostCards/PostCards';

import { getPosts } from '../../api/posts';
import { Grid } from '@mui/material';

export default function MainPage () {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      if (posts && posts.length > 0) {
        const maxPosts = posts.slice(0,9);
        if (Array.isArray(maxPosts)) {
          setPosts(maxPosts);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ScheduleAdd />
      <Grid container spacing={2} justifyContent="center">
        {posts.map((post, index) => (
          <Grid item xs={12} key={index} style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <PostCards
              title={post.title}
              description={post.description}
              postId={post._id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );  
};
