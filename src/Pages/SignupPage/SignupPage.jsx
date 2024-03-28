import React, { useState } from "react";
import "./SignupPage.Style.css";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Buttons/Button";
import { RiLoginCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../Redux/Slices/authentication";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.authentication);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email,
    };

    dispatcher(signupUser({ newUser })).then((result) => {
      if (result.payload) {
        setEmail("");
        navigate("/login");
        toast.success("Registered successfully! Create a password");
      }
    });
  };

  return (
    <div className="login_container">
      <div className="signup_container"></div>
      <div className="signup_field_container">
        <span></span>
        <form onSubmit={handleSubmit}>
          <span className="login_header">
            <RiLoginCircleLine className="header_icons" />
            <p className="header_title">SIGN UP</p>
          </span>

          <InputField
            type="email"
            names="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmail}
          />
          <Button
            type="submit"
            title={loading ? "loading..." : "Sign Up"}
            className="btn"
          />
        </form>
        {error && <div>{error} </div>}
        <span></span>
      </div>
    </div>
  );
};

export default SignupPage;
