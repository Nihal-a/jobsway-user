import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";
import CategorySection from "../components/category/CategorySection";
import Whyjobsway from "../components/features/Whyjobsway";
import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";
import PostJob from "../components/postJob/PostJob";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import BlockedUserPage from "./BlockedUserPage";
import { getFeaturedJobs } from "../actions/jobs";
import { useDispatch } from "react-redux";



function Landing() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  
  useEffect(() => {
  }, [])
  
  return (
    <div>
      {user?.authData?.user?.ban ? <BlockedUserPage/>  : <> <div className="h-auto w-screen ">
      <Navbar />
      <Home />
      </div>
      <CategorySection />
      <Whyjobsway />
      <FeaturedJobs  />
      <PostJob />
      <Footer /></>}
      
    </div>
  );
}

export default Landing;
