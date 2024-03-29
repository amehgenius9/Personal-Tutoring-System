import React, { useState } from "react";
import "./LoginPage.Style.css";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slices/authentication";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { loading, error } = useSelector((state) => state.authentication);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    let userCredentials = { email, name };

    dispatcher(loginUser({ userCredentials }))
      .then((result) => {
        if (result.payload) {
          // const route =  result.payload.category === "admin" ? '/dashboard' : result.payload.category === 'tutor'? "/tutor/dashboard": "/tutee/dashboard"
          setEmail("");
          setName("");
          navigate("/dashboard"); // navigate(result.payload.category == 'tutor' ? '/dashboard' : '/tutee/dashboard') // navigate(route)
          toast.success("You have successfully logged in!");
        } else {
          toast.error(
            "Invalid credentials! Please try again with correct details"
          );
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="login_container">
      <div className="icon_container"></div>
      <div className="field_container">
        <span></span>
        <form onSubmit={handleSubmit}>
          <span className="login_header">
            <RiLoginCircleLine className="header_icons" />
            <p className="header_title">LOGIN</p>
          </span>
          <InputField
            type="email"
            names="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmail}
          />
          <InputField
            type="text"
            names="name"
            placeholder="name"
            value={name}
            onChange={handlePassword}
          />
          <Button
            type="submit"
            title={loading ? "Loading..." : "Login"}
            className="btn"
          />
        </form>
        {error && <div>{error}</div>}
        <span></span>
      </div>
    </div>
  );
};

export default LoginPage;
