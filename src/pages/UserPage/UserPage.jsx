import { Avatar, Box, Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "./EditProfile";
import { fetchUserData } from "../../service/users";

function UserPage({ userData, setUserData }) {
//   const [userPosts, setUserPosts] = useState([]);
  const { userId } = useParams();
  const [editProfile, setEditProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPostsData(userId);
      setUserPosts(posts);
      const user = await fetchUserData(userId);
      setUserData(user);
    };
    fetchData();
  }, []);

  const BASE_URL = "http://localhost:3000/users";
//   const BASE_URL = "https://gamebuddy-mnj1.onrender.com/users";

  return (
    <>
      {userData && (
        <>
          <Box
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              mt: 4,
              width: "80vw",
              height: "40vh",
              border: "solid",
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
              <Typography variant="h5">{userData.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {userData.email}
              </Typography>
              <button onClick={() => setEditProfile(true)}>Edit Profile</button>
            </Box>
            {editProfile && (
              <EditProfile
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </Box>
          <br />
          {/* <div>User Posts</div> */}
          {/* <UserPosts posts={userPosts} /> */}
        </>
      )}
    </>
  );
}

export default UserPage;