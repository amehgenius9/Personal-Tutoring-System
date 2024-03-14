import React from "react";
import "./Dashboard.style.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const about = "/about";
    navigate(about);
  };
  return (
    <div>
      <h1 className="header">Person Tutoring System</h1>
      <button onClick={handleButtonClick}>Next Page</button>
    </div>
  );
};

export default Dashboard;
