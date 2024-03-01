import React, { useEffect, useState } from 'react';

import { getPostsSearch } from '../../api/posts'; 
import { Grid, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import SearchItem from '../../components/Search/SearchItem/SearchItem';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); // Get the query from URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (query) {
          const fetchedPosts = await getPostsSearch(query);
          if (fetchedPosts) {
            setPosts(fetchedPosts);
          } else {
            // Handle case where no posts are returned
            setPosts([]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        // Handle error state as needed
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Grid 
              item xs={12} key={index} 
              style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}
            >
              <SearchItem
                title={post.title}
                description={post.description}
                postId={post._id}
                username={post.username}
              />
            </Grid>
          ))
        ) : (
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white', 
              textAlign: 'center', 
              width: '100%',
              fontSize: "20px",
              backgroundColor:'rgba(255,255,255,0.15)',
              paddingBlock:'1rem',
            }}>
            "No Search Results"
          </Typography>
        )}
      </Grid>
    </>
  );  
};