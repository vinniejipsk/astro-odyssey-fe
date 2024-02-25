import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { submitPost } from "../../../service/posts";
// import { getUser } from "../../../service/users";
// import { getToken } from "../../util/security";


export default function CreatePostForm() {
  const [postForm, setPostForm] = useState({
    userId: "",
    title: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // useEffect(() => {
  //   const user = getUser();
  //   if (user) {
  //     setPostForm((prevState) => ({ ...prevState, userId: user }));
  //   }
  // }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostForm({ ...postForm, [name]: value });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    // const { userId, ...submissionData } = postForm; 
    // const submissionData = postForm.userId ? { ...postForm } : { ...postForm, userId: undefined };
    const submissionData = { ...postForm, userId: "anonymous" }; 
    console.log(submissionData)
    // const token = getToken();
    // const payload = token ? JSON.parse(atob(token.split(".")[1])).payload : null;
    try {
      const response = await submitPost(submissionData);
      // Reset the form on successful submission
      setPostForm({
        userId: "",
        title: "",
        description: "",
      });
      setFormErrors({});
    } catch (error) {
      // Handle error feedback
      console.error("Error submitting post:", error);
    }
  }
  //   if (payload && payload._id) {
  //     const updatedPostForm = { ...postForm, userId: payload._id };

  //     if (!validateForm()) {
  //       return;
  //     }

  //     try {
  //       const response = await submitPost(updatedPostForm);
  //       // Reset the form on successful submission
  //       setPostForm({
  //         userId: "",
  //         title: "",
  //         description: "",
  //       });
  //       setFormErrors({});
  //     } catch (e) {
  //       console.error("Error submitting post", e);
  //       alert("Error submitting post");
  //     }
  //   } else {
  //     alert("Please log in to submit a post");
  //   }
  // }

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
            Create a Post
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
                    value={postForm.title}
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
                  value={postForm.description}
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
            {/* <input type="hidden" name="userId" value={postForm.userId} /> */}
          </Box>
        </Box>
      </Container>
  );
}