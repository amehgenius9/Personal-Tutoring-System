import React from "react";
import "./Button.Style.css";

const Button = ({ title, Onclick, className }) => {
  return (
    <>
      <button className={`button ${className}`} onClick={Onclick}>
        {title}
      </button>
    </>
  );
};

export default Button;
