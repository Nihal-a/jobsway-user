import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";
import CategorySection from "../components/category/CategorySection";

function Landing() {
  return (
    <div>

      <div className="h-screen w-screen ">
      <Navbar />
      <Home />
      </div>
      <CategorySection />
    </div>
  );
}

export default Landing;
