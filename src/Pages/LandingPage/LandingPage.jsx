import React from "react";
import Button from "../../Components/Buttons/Button";
import "./LandingPage.Style.css";
import ImageCard from "../../Components/ImageCard/ImageCard";
import HeroImage from "../../assets/undraw_teaching_re_g7e3.svg";
import { WiCloudyWindy } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const login = "/login";
    navigate(login);
  };
  const handleSignupButton = () => {
    const signup = "/signup";
    navigate(signup);
  };
  return (
    <div className="container">
      <header className="header">
        <WiCloudyWindy style={{ fontSize: 60, color: "white" }} />
        <Button title="Login" Onclick={handleButtonClick} />
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Unleashing the Hero in Every <span className="span">Student</span>
            </h1>
            <p className="hero_text_letters">
              <span style={{ color: "black" }}>
                Welcome to TheHub, where your academic journey takes flight.
              </span>{" "}
              We connect you with exceptional personal tutors who empower you to
              master essential skills, build resilience, and gain the confidence
              to conquer any challenge.
            </p>
          </div>
          <Button
            className="get_started"
            Onclick={handleSignupButton}
            title="Get started"
          />
        </section>
        <ImageCard
          className="hero-image"
          imageUrl={HeroImage}
          alt="hero_image"
        />
      </main>
    </div>
  );
};

export default LandingPage;
