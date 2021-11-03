import React,{useState} from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/landing/Home";
import CategorySection from "../components/category/CategorySection";
import Whyjobsway from "../components/features/Whyjobsway";
import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";
import PostJob from "../components/postJob/PostJob";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../constants/actionTypes";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import BlockedUserPage from "./BlockedUserPage";



function Landing() {
  const user = useSelector(state => state.user)

  return (
    <div>
      {user?.authData?.user?.ban ? <BlockedUserPage/>  : <> <div className="h-auto w-screen ">
      <Navbar />
      <Home />
      </div>
      <CategorySection />
      <Whyjobsway />
      <FeaturedJobs />
      <PostJob />
      <Footer /></>}
      
    </div>
  );
}

export default Landing;
