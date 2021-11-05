import React,{useState,useEffect} from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import {useDispatch} from "react-redux"
import { googlesign, signin } from "../../actions/auth";
import jwtDecode from "jwt-decode";
import { Icon } from "@iconify/react";




const initialState = {email:'',password:''}

function SigninForm() {

  const [formData, setFormData] = useState(initialState)
  const [withPhone, setWithPhone] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    location.state = undefined
  }, [formData])

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
    const user = { email: result.email, firstName: result.givenName, lastName: result?.familyName, password: res.googleId }
    try {
      dispatch(googlesign(user,history))
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
          {location?.state?.Err && <p className="text-red-800" style={{ color: "red" }}>{location.state.Err}</p> }
          <input onChange={handleChange} name="email" placeholder="Email" className="input" type="email" />
          <input onChange={handleChange} name="password" placeholder="Password" className="input" type="password" />
        <button className="primary mt-4" type="submit">
          Sign In
        </button>
        </form>
        <br />
        <p>Or</p>
        <GoogleLogin 
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
