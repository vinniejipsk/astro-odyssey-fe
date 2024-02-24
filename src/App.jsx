import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// import { getUser, logoutUser } from "./service/users";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import ContentPage from "./pages/ContentPage/ContentPage";

// import UserPage from "./pages/UserPage/UserPage";
// import EventPage from "./pages/EventPage/EventPage";
// import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

import NavBar from "./components/NavBar/NavBar";
// import BackgroundPlate from "./components/BackgroundPlate/BackgroundPlate";
import ParticlesBackground from "./components/Background/ParticlesBackground/ParticlesBackground";

import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";

// import ViewReviewPage from "./components/ViewReviewPage/ViewReviewPage";
// import UpdateReviewForm from "./components/CreateReviewForm/UpdateReviewForm";
// import { getToken } from "./util/security";

function App() {

  return (
    <main className="App">
      <ParticlesBackground />
      <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<SignUpForm />} />
            {/* <Route path="/login" element={<SignInForm setUser={setUser} setUserId={setUserId} />} /> */}
            <Route path="/login" element={<SignInForm />} />
            <Route path="/create" element={<ContentPage />} />
          </Routes>
      </div>
    </main>
  );
}

export default App
