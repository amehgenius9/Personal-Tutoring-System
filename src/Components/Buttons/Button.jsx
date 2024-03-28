import React from "react";
import "./Button.Style.css";

const Button = ({ title, Onclick, className, type }) => {
  return (
    <>
      <button className={`button ${className}`} type={type} onClick={Onclick}>
        {title}
      </button>
    </>
  );
};

export default Button;
