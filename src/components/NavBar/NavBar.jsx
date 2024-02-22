import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

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
              <Box 
                  sx={{ 
                      display: "flex", 
                      alignItems: "center",
                      border: '1px solid white', // Add border, specify color as needed
                      borderRadius: '10px', // Adjust for desired curvature
                      padding: '3px 16px', // Add some padding inside the border
                  }}
              >
                <Link
                    // to={`/user/${userId}`}
                    style={{
                    textDecoration: "none",
                    color: "inherit",
                    }}
                >
                    <Typography sx={{ fontSize: '18px' }} color="inherit" component="div" >
                    User
                    </Typography>
                </Link>
              </Box>

              <Box 
                  sx={{ 
                      display: "flex", 
                      alignItems: "center",
                      border: '1px solid white', // Add border, specify color as needed
                      borderRadius: '2px', // Adjust for desired curvature
                      padding: '4px 16px', // Add some padding inside the border
                      marginLeft: '10px',
                  }}
              >
                <Link
                    // to={`/menu`}
                    style={{
                    textDecoration: "none",
                    color: "inherit",
                    }}
                >
                    <Typography sx={{ fontSize: '16px' }} color="inherit" component="div" >
                    MENU
                    </Typography>
                </Link>
              </Box>
              
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}