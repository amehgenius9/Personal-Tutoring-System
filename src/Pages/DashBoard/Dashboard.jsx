import React from "react";
import "./Dashboard.style.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "../../Components/Buttons/Button";
import Overview from "../Overview/Overview";
import SettingsPage from "../SettingsPage/SettingsPage";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>

    // <div>
    //   <h1 className="header">Person Tutoring System</h1>
    //   <Button title="Next Page" Onclick={handleButtonClick} />
    // </div>
  );
};

export default Dashboard;
