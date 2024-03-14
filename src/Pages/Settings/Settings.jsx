import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const home = "/";
    navigate(home);
  };
  return (
    <div>
      <h1 className="title">Andriod Operating System</h1>
      <button onClick={handleButtonClick}>Prev Page</button>
    </div>
  );
};

export default Settings;
