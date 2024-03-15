import React from "react";
import Button from "../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const settings = "/settings";
    navigate(settings);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <Button title="Next Page" Onclick={handleButtonClick} />
    </div>
  );
};

export default Overview;
