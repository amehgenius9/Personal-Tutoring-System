import React from "react";
import "./App.css";
import Router from "./Routes/Routes";
import useWindowSize from "./useWindowSize";

const App = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  return (
    <>
      {/* {isDesktop ? (
        <Router />
      ) : (
        <div className="message">
          This website can only be viewed on desktop.
        </div>
      )} */}
      <Router />
    </>
  );
};

export default App;
