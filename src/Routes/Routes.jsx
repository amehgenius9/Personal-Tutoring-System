import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../Pages/DashBoard/Dashboard";
import About from "../Pages/About/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<DashBoard />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
