import { Avatar, Box, Button, Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EditProfile from "./EditProfile";
import { fetchPostsData, fetchUserData } from "../../service/users";

function UserPage({ userData, setUserData }) {
  const { userId } = useParams();
  const [editProfile, setEditProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUserData(userId);
      setUserData(user);
    };
    fetchData();
  }, []);

  // REAL URL
  const BASE_URL = "https://astro-odyssey-be.onrender.com/users";
  // TEST URL
  // const BASE_URL = "http://localhost:3000/users";

  return (
    <>
      {userData && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection:'column',
              justifyContent:"center",
              alignItems: "center",
              height: "50vh",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Avatar
              alt={userData.name}
              src={userData.avatarUrl}
              sx={{
                width: 100,
                height: 100,
                mx: 5,
              }}
            />
            <Box
              sx={{
                mt: 2,
                textAlign: "center",
                px: 5,
              }}
            >
              <Typography 
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Name: {userData.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{
                  color: "white",
                  marginTop: '0.5rem',
                }}
              >
                Email: {userData.email}
              </Typography>
              <Button 
                onClick={() => setEditProfile(true)}
                sx = {{ 
                  mt: 2.5,
                  border: "solid white",
                  color: "white", 
                  backgroundColor:'rgba(255,255,255,0.25)',
                }}
              >
                Edit Profile
              </Button>
            </Box>
            {editProfile && (
              <EditProfile
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </Box>
          <br />
        </>
      )}
    </>
  );
}

export default UserPage;