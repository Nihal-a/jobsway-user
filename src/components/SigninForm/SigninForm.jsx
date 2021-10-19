import React,{useState,useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import {
  LinkedInLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {useDispatch} from "react-redux"
import { signin } from "../../actions/auth";
import { useLocation } from "react-router";


const initialState = {email:'',password:''}

function SigninForm() {

  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  

  useEffect(() => {
    location.state = undefined
  },[location])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signin(formData,history))
  }
  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData,[e.target.name] : e.target.value})
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
        <div className="" style={{ width: "270px" }}>
          <GoogleLoginButton />
          <LinkedInLoginButton />
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
