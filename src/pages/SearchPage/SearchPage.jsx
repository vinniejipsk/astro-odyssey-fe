import React, { useEffect, useState } from 'react';

import { getPostsSearch } from '../../api/posts'; 
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchItem from '../../components/Search/SearchItem/SearchItem';

const filterTypes = [
  { label: "Meteor Showers", value: "Meteor Shower" },
  { label: "Solar Eclipses", value: "Solar Eclipse" },
  { label: "Planetary Transits", value: "Planetary Transit" },
  { label: "Lunar Eclipses", value: "Lunar Eclipse" },
  { label: "Oppositions", value: "Opposition" },
  { label: "Conjunctions", value: "Conjunction" },
  { label: "Guide", value: "Guide" },
  { label: "Discussion", value: "Discussion" },
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query'); // Get the search query from URL
  const type = searchParams.get('type'); // Get the type from URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Adjusted to pass both query and type to the API call
        const fetchedPosts = await getPostsSearch({ query, type });
        if (fetchedPosts) {
          setPosts(fetchedPosts);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      }
    };
    fetchSearchResults();
  }, [query, type]);

  const handleFilterClick = (filterValue) => {
    // Keep the existing query and update the type in the search params
    setSearchParams({ query: query || '', type: filterValue });
  };

  return (
    <>
      <Grid 
        container spacing={2} 
        justifyContent="center"
        sx={{ marginBottom: "2rem" }}
        >
        {filterTypes.map((filterType) => (
          <Grid item key={filterType.value}>
            <Button 
              variant="contained" 
              onClick={() => handleFilterClick(filterType.value)}
              sx={{ backgroundColor: "rgba(22,38,62,0.75)" }}
              >
              {filterType.label}
            </Button>
          </Grid>
        ))}
      </Grid>
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
              marginTop:"1rem",
            }}>
            No Search Results
          </Typography>
        )}
      </Grid>
    </>
  );  
};