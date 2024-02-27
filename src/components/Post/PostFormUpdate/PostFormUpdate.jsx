import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { deletePost, updatePost } from "../../../service/posts";

export default function PostFormUpdate() {
  const [postData, setPostData] = useState({
    userId: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState('');
  const { postId } = useParams();
  const navigate = useNavigate();
  const userId = postData.userId;

  // REAL URL
  // const BASE_URL = "https://gamebuddy-mnj1.onrender.com/posts";
  // TEST URL
  const BASE_URL = "http://localhost:3000/posts";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(BASE_URL + `/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPostData({
          userId: data.userId || '',
          title: data.title || '',
          description: data.description || '',
        });
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchPost();
  }, [postId]);

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPostData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleDelete = async () => {
      try {
        await deletePost(postId, userId);
        navigate("/");
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        const updatedPost = await updatePost(postId, postData, userId);
        navigate(`/posts/${postId}`);
      } catch (error) {
        setError(error.message);
      }
    };
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
      <Container component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius:'0.5rem',
            padding: "1rem",
            paddingTop: "3rem",
            maxWidth: "75%", // Set the maxWidth of the Box to 50%
            width: "100%", // Ensure the Box tries to fill its maxWidth
            margin: "auto", // This centers the Box horizontally in its parent
            boxSizing: "border-box", // Ensures padding is included in the width calculation
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: "5rem",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "white" }} >
            Update a Post
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="title"
                    label="Title"
                    value={postData.title}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      style: { color: 'white' }, // Style for the label
                    }}
                    sx={{
                      '& label.Mui-focused': {
                        color: 'white',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                        '& input': {
                          color: 'white', // This ensures input text color is white
                        },
                      },
                    }}
                  />
                </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  multiline
                  rows={10}
                  value={postData.description}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    style: { color: 'white' }, // Style for the label
                  }}
                  sx={{
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                      '& input': {
                        color: 'white', // Ensures input text color is white
                      },
                      '& textarea': {
                        color: 'white', // Ensures textarea text color is white for multiline
                      },
                    },
                  }}                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Post
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleDelete}
            >
              Delete Post
            </Button>
          </Box>
        </Box>
      </Container>
  );
}