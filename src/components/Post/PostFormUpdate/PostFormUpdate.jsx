import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { 
  Button,
  TextField,
  Grid, 
  Box, 
  Typography, 
  Container, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
} from "@mui/material";

import { textFieldStyles } from "../formstyle"
import '../datepicker.css'

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { deletePost, updatePost } from "../../../service/posts";

export default function PostFormUpdate() {
  const [postData, setPostData] = useState({
    userId: "",
    title: "",
    description: "",
    type: "", 
    dateTime: "",
    locationObserve: "",
    visibility: "", 
    magnitude: "", 
    media: "",
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
          type: data.type || "", 
          dateTime: data.dateTime || "",
          locationObserve: data.locationObserve || "",
          visibility: data.visibility || "", 
          magnitude: data.magnitude || "", 
          media: data.media || "",
        });
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchPost();
  }, [postId]);

  const handleInputChange = (eventOrValue) => {
    let name, value;
    if (eventOrValue && eventOrValue.target) {
        name = eventOrValue.target.name;
        value = eventOrValue.target.value;
    } else {
        name = "dateTime";
        value = eventOrValue;
    }

    setPostData(prevData => ({
        ...prevData,
        [name]: value
    }));
  };

  const shouldDisableFields = () => {
    return postData.type === 'Discussion' || postData.type === 'Guide';
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
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                <FormControl 
                  fullWidth
                  sx={textFieldStyles}
                >
                  <InputLabel id="type-label" sx={{ color: 'white' }}>Event Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="type"
                    name="type"
                    value={postData.type}
                    label="Event Type"
                    onChange={handleInputChange}
                  >
                    {eventTypeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8} sm={4}>
                <FormControl 
                  fullWidth
                  sx={textFieldStyles}
                >
                  <InputLabel id="visibility-label" sx={{ color: 'white' }}>Visibility</InputLabel>
                  <Select
                    labelId="visibility-label"
                    id="visibility"
                    name="visibility"
                    value={postData.visibility}
                    label="Visibility"
                    onChange={handleInputChange}
                    disabled={shouldDisableFields()}
                  >
                    {visibilityOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} className="datePickerCustomization">
                <LocalizationProvider 
                  dateAdapter={AdapterDayjs}
                >
                  <DatePicker 
                    fullWidth
                    name="dateTime"
                    label="Date and Time"
                    value={postData.dateTime ? dayjs(postData.dateTime) : null}
                    onChange={handleInputChange}
                    disabled={shouldDisableFields()}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  name="locationObserve"
                  label="Where to Observe"
                  value={postData.locationObserve}
                  onChange={handleInputChange}
                  disabled={shouldDisableFields()}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={textFieldStyles}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="magnitude"
                  label="Magnitude"
                  value={postData.magnitude}
                  onChange={handleInputChange}
                  disabled={shouldDisableFields()}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={textFieldStyles}
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
                  sx={textFieldStyles}             
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Post
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

const eventTypeOptions = [
  { label: "Meteor Shower", value: "Meteor Shower" },
  { label: "Solar Eclipse", value: "Solar Eclipse" },
  { label: "Planetary Transit", value: "Planetary Transit" },
  { label: "Lunar Eclipse", value: "Lunar Eclipse" },
  { label: "Opposition", value: "Opposition" },
  { label: "Conjunction", value: "Conjunction" },
  { label: "Guide", value: "Guide" },
  { label: "Discussion", value: "Discussion" },
];

const visibilityOptions = [
  { label: "Visible to the naked eye", value: "Visible to the naked eye" },
  { label: "Requires a telescope to observe", value: "Requires a telescope to observe" },
  { label: "None", value: "None" }
];