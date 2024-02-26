import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';

import { signUp } from "../../service/users";
import { hashData } from "../../util/security";

export default function SignUpForm() {
  const [formState, setFormState] = useState({});
  const [signUpStatus, setSignUpStatus] = useState();

  function handleChange(evt) {
    var currForm = formState;
    currForm[evt.target.name] = evt.target.value;
    setFormState(currForm);
  }

  function hashPassword() {
    var currForm = formState;
    if (currForm.password) {
      var hash = hashData(currForm.password);
      currForm.password = hash.hash;
      currForm.salt = hash.salt;
      currForm.iterations = hash.iterations;
    }
  }

  async function handleSubmit(evt) {
    try {
      evt.preventDefault();
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      
      hashPassword();
      const formData = { ...formState };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      setSignUpStatus(user);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, color: 'white', }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                  InputLabelProps={{
                      style: { color: 'white' },
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  InputLabelProps={{
                    style: { color: 'white' },
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  InputLabelProps={{
                    style: { color: 'white' },
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/login" style={{ textDecoration: 'none', color: 'lightblue' }}>
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}