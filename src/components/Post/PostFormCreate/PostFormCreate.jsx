import * as React from "react";
import { useState, useEffect } from "react";
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

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { fetchUserData } from "../../../service/users";
import { submitPost } from "../../../service/posts";

import { getToken } from "../../../util/security";

export default function PostFormCreate() {

  // { userId, userData, setUserData }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await fetchUserData(userId);
  //     setUserData(user);
  //     setPostForm((prevState) => ({
  //       ...prevState,
  //       userId: userId, 
  //       username: user.name, 
  //     }));
  //   };
  
  //   if (userId) {
  //     fetchData();
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     fetchUserData(userId)
  //       .then(user => {
  //         setUserData(user);
  //         setPostForm((prevState) => ({
  //           ...prevState,
  //           userId: userId,
  //           username: user.name, // Assuming 'name' is a field in your user data
  //         }));
  //       })
  //       .catch(error => {
  //         console.error('Failed to fetch user data:', error);
  //         // Optionally set an error state here to show an error message
  //       });
  //   }
  // }, [userId]);

  const [userId, setUserId] = useState("");
  
  useEffect(() => {
    const token = getToken();
    const payload = token ? JSON.parse(atob(token.split(".")[1])).payload : null;
    if (payload && payload._id) {
      setPostForm(prevForm => ({
        ...prevForm,
        userId: payload._id,
        username: payload.user
      }));
    }
  }, []);

  const [postForm, setPostForm] = useState({
    userId: userId, 
    title: "",
    description: "",
    type: "", 
    dateTime: "",
    locationObserve: "",
    visibility: "", 
    magnitude: "", 
    media: "",
    username: "",
  });
  // const [formErrors, setFormErrors] = useState({});
  console.log(postForm)
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (eventOrValue, maybeValue) => {
    let name, value;
  
    if (eventOrValue.target) {
      name = eventOrValue.target.name;
      value = eventOrValue.target.value;
    } else {
      name = "dateTime"; 
      value = eventOrValue;
    }
    setPostForm({ ...postForm, [name]: value });
  };

  const shouldDisableFields = () => {
    return postForm.type === 'Discussion' || postForm.type === 'Guide';
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!postForm.title || !postForm.description) {
      setErrorMessage("Please fill up the required details.");
      setSuccessMessage("");
      return;
    }
    const formSubmission = { ...postForm, userId: postForm.userId, username: postForm.username };
    try {
      const response = await submitPost(formSubmission);
        setPostForm({
          userId: "",
          title: "",
          description: "",
          type: "",
          dateTime: "",
          locationObserve: "",
          visibility: "",
          magnitude: "",
          media: "",
          username: "", 
        });
        setSuccessMessage("Your post has been created!");
        setErrorMessage("");
    } catch (e) {
      console.error("Error submitting post", error);
      setErrorMessage("Error submitting post. Please try again.");
      setSuccessMessage("");
    }
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
            maxWidth: "75%", 
            width: "100%",
            margin: "auto", 
            boxSizing: "border-box",
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
                    style: { color: 'white' }, 
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
                    value={postForm.type}
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
                    value={postForm.visibility}
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
                    value={postForm.dateTime}
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
                  value={postForm.locationObserve}
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
                  value={postForm.magnitude}
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
                  value={postForm.description}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    style: { color: 'white' }, // Style for the label
                  }}
                  sx={textFieldStyles}               
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="media"
                  label="Import Image Link"
                  value={postForm.media}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    style: { color: 'white' },
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
              Submit Post
            </Button>
            {successMessage && <Typography color="lightgreen">{successMessage}</Typography>}
            {errorMessage && <Typography color="red">{errorMessage}</Typography>}
            <input type="hidden" name="userId" value={postForm.userId} />
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
  { label: "Visible to the naked eye with proper safety equipment", value: "Visible to the naked eye with proper safety equipment" },
  { label: "None", value: "None" }
];