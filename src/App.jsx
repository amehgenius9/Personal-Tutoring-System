import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
// import { useSelector } from "react-redux";
import About from "./Pages/About/About";
import Dashboard from "./Pages/DashBoard/Dashboard";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import useWindowSize from "./useWindowSize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  return (
    <>
      <ToastContainer />
      {isDesktop ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="message">
          This website can only be viewed on desktop.
        </div>
      )}
    </>
  );
};

export default App;
