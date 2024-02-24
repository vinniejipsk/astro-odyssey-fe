import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import MenuDrawer from "./MenuDrawer";

// import { getToken } from "../../util/security";

export default function NavBar() {
//   const token = getToken();
//   const userId = token
//     ? JSON.parse(atob(token.split(".")[1])).payload._id
//     : null; // Decode JWT to get userId
//   const username = token
//     ? JSON.parse(atob(token.split(".")[1])).payload.user
//     : "guest!";

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
          <Toolbar>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/"
              sx={{ fontSize: '20px' }}
            >
              AstroOdyssey
            </IconButton>

            <Box sx={{ flexGrow: 1 }}></Box>
              <Button 
                  sx={{ 
                      display: "flex", 
                      alignItems: "center",
                      border: '1px solid white', // Add border, specify color as needed
                      borderRadius: '10px', // Adjust for desired curvature
                      padding: '4.5px 10px', // Add some padding inside the border
                  }}
              >
                <Link
                    // to={`/user/${userId}`}
                    to={`/user`}
                    style={{
                    textDecoration: "none",
                    color: "inherit",
                    }}
                >
                    <Typography sx={{ fontSize: '16px', color: 'white' }} color="inherit" component="div" >
                    User
                    </Typography>
                </Link>
              </Button>
              <MenuDrawer />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}