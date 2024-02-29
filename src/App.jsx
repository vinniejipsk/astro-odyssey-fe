import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import { getUser, logoutUser } from "./service/users";
// import { getPost } from './service/posts';

import MainPage from "./pages/MainPage/MainPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import UserPage from "./pages/UserPage/UserPage";
// import EventPage from "./pages/EventPage/EventPage";

import PostFormCreate from "./components/Post/PostFormCreate/PostFormCreate"
import PostFormUpdate from "./components/Post/PostFormUpdate/PostFormUpdate";

import NavBar from "./components/NavBar/NavBar";
import ParticlesBackground from "./components/Background/ParticlesBackground/ParticlesBackground";
import { ParticleProvider } from './components/Background/ParticlesBackground/ParticleContext'; 

import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";

import GuestMainBanner from "./components/Guest/GuestMainBanner/GuestMainBanner";
import UserMainBanner from "./components/User/UserMainBanner/UserMainBanner";
import GuestInfo from "./components/Guest/GuestInfo/GuestInfo";

import SearchPage from "./pages/SearchPage/SearchPage";
import EventPage from "./pages/EventPage/EventPage";

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
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    if (location.pathname === '/') { 
      setTimeout(() => setKey(prevKey => prevKey + 1), 100); 
    }
  }, [location.pathname]); 

  return (
    <main className="App">
      <ParticleProvider>
        <ParticlesBackground key={key} />
        <NavBar userId={userId} handleLogOut={handleLogOut} />
        <div>
        {user ? (
            <>
              <UserMainBanner />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/user/:userId"
                  element={
                    <UserPage userData={userData} setUserData={setUserData} />
                  }
                />
                <Route path="/schedule" element={<EventPage/>} />
                <Route path="/create" element={<PostFormCreate userId={userId} userData={userData} setUserData={setUserData} />} />
                <Route path="/posts/:postId" element={<ContentPage userData={userData} setUserData={setUserData} />} />
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
      </ParticleProvider>
    </main>
  );
}

export default App
