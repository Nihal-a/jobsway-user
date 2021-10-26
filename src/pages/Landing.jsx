import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";

function Landing() {
  return (
    <div>

      <div className="h-screen w-screen ">
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default Landing;
