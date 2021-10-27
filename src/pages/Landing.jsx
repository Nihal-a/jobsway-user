import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";
import CategorySection from "../components/category/CategorySection";
import Whyjobsway from "../components/features/Whyjobsway";
import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";

function Landing() {
  return (
    <div>

      <div className="h-auto w-screen ">
      <Navbar />
      <Home />
      </div>
      <CategorySection />
      <Whyjobsway />
      <FeaturedJobs />
    </div>
  );
}

export default Landing;
