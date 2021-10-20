import React,{useState,useEffect} from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import {useDispatch} from "react-redux"
import { signin } from "../../actions/auth";
import jwtDecode from "jwt-decode";



const initialState = {email:'',password:''}

function SigninForm() {

  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signin(formData,history))
  }
  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData,[e.target.name] : e.target.value})
  }
  const googleFaliure = (error) => {
    console.log("Google login falied : "+error);
  }

  const googleSuccess = (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    console.log(res);
    const user = {email : result.email, password:res.googleId}
    console.log(user);
    try {
      dispatch(signin(user,history))
      history.push('/')
    } catch (error) {
      console.log("Google sign err : "+error);
    }
  }

  return (
    <div>
      <div className="signup-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h3 className="welcome ">Sign In to JobsWay.</h3>
          {location.state !== undefined ? <p className="text-red-800">Invalid Username or Password</p> : null}
          <input onChange={handleChange} name="email" placeholder="Email or Phone" className="input" type="email" />
          <input onChange={handleChange} name="password" placeholder="Password" className="input" type="password" />
        <button className="primary mt-4" type="submit">
          Sign In
        </button>
        </form>
        <br />
        <p>Or</p>
        <GoogleLogin 
          clientId="451599435195-j8s2c83afli67b885bstah4nt1cuao8f.apps.googleusercontent.com"
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} style={{width:'15rem'}}/>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFaliure}
          cookiePolicy="single_host_origin"
        />
        <div className="" style={{ width: "270px" }}>
          <p className="mt-4">
            New to jobsWay?
            <Link to="/signup" style={{ color: "#008FAE" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
