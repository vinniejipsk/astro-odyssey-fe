import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Button } from "@mui/material";

import { getUser, logoutUser } from "./service/users";
import { getPost } from './service/posts'

import MainPage from "./pages/MainPage/MainPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import UserPage from "./pages/UserPage/UserPage";
// import EventPage from "./pages/EventPage/EventPage";

import PostFormCreate from "./components/Post/PostFormCreate/PostFormCreate"
import PostFormUpdate from "./components/Post/PostFormUpdate/PostFormUpdate";

import NavBar from "./components/NavBar/NavBar";
import ParticlesBackground from "./components/Background/ParticlesBackground/ParticlesBackground";

import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";

import GuestMainBanner from "./components/Guest/GuestMainBanner/GuestMainBanner";
import UserMainBanner from "./components/User/UserMainBanner/UserMainBanner";
import GuestInfo from "./components/Guest/GuestInfo/GuestInfo";

import { getToken } from "./util/security";

function App() {
  const [user, setUser] = useState(getUser());
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  
  // retrieve user id when logged in
  useEffect(() => {
    const token = getToken();
    const payload = token
      ? JSON.parse(atob(token.split(".")[1])).payload
      : null;
    if (payload && payload._id) {
      setUserId(payload._id);
    }
  }, []);

  function handleLogOut() {
    logoutUser();
    setUser(null);
  }

  return (
    <main className="App">
      <ParticlesBackground />
      <NavBar userId={userId} handleLogOut={handleLogOut} />
      <div>
      {user ? (
          <>
            <UserMainBanner />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/user/:userId"
                element={
                  <UserPage userData={userData} setUserData={setUserData} />
                }
              />
              <Route path="/create" element={<PostFormCreate />} />
              <Route path="/posts/:postId" element={<ContentPage />} />
              <Route
                path="/posts/:postId/edit"
                element={<PostFormUpdate />}
              />
            </Routes>
          </>
        ) : (
          <>
            <GuestMainBanner />
            <GuestInfo />
            <Routes>
              <Route path="/register" element={<SignUpForm />} />
              <Route
                path="/login"
                element={<SignInForm setUser={setUser} setUserId={setUserId} />}
              />
            </Routes>
          </>
        )}
      </div>
    </main>
  );
}

export default App
