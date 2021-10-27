import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";
import CategorySection from "../components/category/CategorySection";
import Whyjobsway from "../components/features/Whyjobsway";

function Landing() {
  return (
    <div>

      <div className="h-screen w-screen ">
      <Navbar />
      <Home />
      </div>
      <CategorySection />
      <Whyjobsway />
    </div>
  );
}

export default Landing;
