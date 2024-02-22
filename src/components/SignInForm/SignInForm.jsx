import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";

import { Link as RouterLink } from 'react-router-dom';

// import { getLoginDetails, getUser, loginUser } from "../../service/users";
// import { hashDataWithSaltRounds, storeToken } from "../../util/security";

export default function LogInForm({ setUser }) {
  const [formState, setFormState] = useState({});
  const [logInStatus, setLogInStatus] = useState("");

  function handleChange(evt) {
    var currForm = formState;
    currForm[evt.target.name] = evt.target.value;
    setFormState(currForm);
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = { ...formState };
      delete formData.error;
      delete formData.confirm;
      const loginDetails = await getLoginDetails(formData.email);

      const hashedPassword = hashDataWithSaltRounds(
        formData.password,
        loginDetails.salt,
        loginDetails.iterations
      );
      formData.password = hashedPassword;
      const token = await loginUser(formData);
      if (token.success === false) {
        setLogInStatus(token.error);
      } else {
        // store token in localStorage
        storeToken(token.data);
      }
      // render welcome message
      setUser(getUser());

      // retrieve user id from token
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: 'rgba(104, 112, 124, 0.25)',
            padding: '3rem',
            color: 'white',
            border: '1px solid white',
            borderRadius: '0.5rem',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "red",
            }}
          >
            {logInStatus}
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' }, // Style for the label
              }}
              InputProps={{
                style: { color: 'white' }, // Style for the input text
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <RouterLink to="/register" style={{ textDecoration: 'none', color: 'lightblue' }}>
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}