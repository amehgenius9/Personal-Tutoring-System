import React from "react";
import "./Dashboard.style.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/SiderBar/Sidebar";

const DashBoard = () => {
  return (
    <div className="one">
      <Header />
      <Sidebar />
    </div>
  );
};

export default DashBoard;
