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
            <Route exact path="/" component={Landing} />
            <Route path="/signup">
                {user ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route path="/signin">
                {user ? <Redirect to="/" /> : <Signin />}
            </Route>
            <Route path="/verifyotp">
                {location.state ? <VerifyOtp /> :  <Redirect to="/" />}
            </Route>
        </Switch>
    )
}

export default Routed
