import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import "./App.css";
import {Route, Redirect, Switch,useHistory,useLocation} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { LOGOUT } from "./constants/actionTypes";
import VerifyOtp from "./pages/VerifyOtp";
import FindJobs from "./pages/FindJobs";
import JobDetails from "./pages/JobDetails";
import CompanyDetails from "./pages/CompanyDetails";
import ApplyJob from "./pages/ApplyJob";
import MyJobs from "./pages/MyJobs";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotOtpVerify from "./pages/ForgotOtpVerify";

function Routed() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {

  },[location])

  useEffect(() => {
    const token  = user?.token;

    if(token){
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  const logout = (e) => {
    dispatch({type : LOGOUT});
    
    history.push('/');
    
    setUser(null);
  }

    return (
        <Switch>

            //Auth 
            <Route path="/signup">
                {user ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route path="/signin">
                {user ? <Redirect to="/" /> : <Signin />}
            </Route>
            <Route path="/forgot-password">
                {user ? <Redirect to="/" /> : <ForgotPassword />}
            </Route>
            <Route path="/forgot-otp-verify">
                {user ? <Redirect to="/" /> : <ForgotOtpVerify />}
            </Route>


            <Route exact path="/" component={Landing} />

            <Route path="/verifyotp">
                {location.state ? <VerifyOtp /> :  <Redirect to="/signin" />}
            </Route>
            <Route path="/findjob">
                {user ?  <FindJobs /> :  <Redirect to="/signin" />}
            </Route>
            <Route path="/jobdetails/:id">
                {user ?  <JobDetails /> :  <Redirect to="/signin" />}
            </Route>
            <Route path="/company-details">
                {user ?  <CompanyDetails /> :  <Redirect to="/signin" />}
            </Route>
            <Route path="/apply-job">
                {user ?  <ApplyJob /> :  <Redirect to="/signin" />}
            </Route>
            <Route path="/my-jobs">
                {user ?  <MyJobs /> :  <Redirect to="/signin" />}
            </Route>
        </Switch>
    )
}

export default Routed
