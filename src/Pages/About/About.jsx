import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const settings = "/settings";
    navigate(settings);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Button title="Next Page" Onclick={handleButtonClick} />
    </div>
  );
};

export default About;
