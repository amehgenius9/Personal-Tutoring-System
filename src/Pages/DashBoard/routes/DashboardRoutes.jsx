import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import About from "../../About/About";

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exaxt path="/home" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
