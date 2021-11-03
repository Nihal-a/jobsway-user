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



function Landing() {
  const user = useSelector(state => state.user)
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = (e) => {
    e.preventDefault( )
    dispatch({type : LOGOUT});
    history.push('/');
    setUserDetails(null);
  }

  return (
    <div>
      {user?.authData?.user?.ban ? <div className="w-screen h-screen flex flex-col items-center justify-center"><h1 className="text-4xl font-semibold">Hello , <span className="text-primary">{user?.authData.user.name}</span></h1>
      <p className="text-center text-xl mt-3 text-dark" style={{color:'red'}}>Your account has been bloacked Due to some activities against <br /> JobsWay's Terms & Conditions.</p>
      <Link className="mt-4 underline text-sm text-primary" onClick={logout}>Back to Login</Link>

      </div>  : <> <div className="h-auto w-screen ">
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
