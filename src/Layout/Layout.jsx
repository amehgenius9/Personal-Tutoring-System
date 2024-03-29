import React, { useEffect } from "react";
import "./Layout.Style.css";
import { WiCloudyWindy } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    if (!user?.userCredentials) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="layout_container">
      <header className="layout_header">
        <WiCloudyWindy className="layout_icon" />
        <p>User Info</p>
      </header>
      <div className="main_container">
        <section className="sidebar">
          <p>side bar</p>
        </section>
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
