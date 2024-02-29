import { useState } from "react";
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
import SearchBar from "../Search/SearchBar/SearchBar";

import { getToken } from "../../util/security";

export default function NavBar({ handleLogOut }) {
  const token = getToken();
  const userId = token ? JSON.parse(atob(token.split(".")[1])).payload._id : null;

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
            {userId && <SearchBar />}
            {userId && (
              <Button 
                sx={{ 
                    display: "flex", 
                    alignItems: "center",
                    border: '1px solid white',
                    borderRadius: '10px',
                    padding: '4.5px 10px',
                }}
              >
                <Link
                  to={`/user/${userId}`}
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
            )}
            <MenuDrawer userId={userId} handleLogOut={handleLogOut} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
