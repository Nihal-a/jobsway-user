import React from "react";
import { Link } from "react-router-dom";
import {
  LinkedInLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const initialState = {email:'',password:''}

function SigninForm() {

  // const [formData, setFormData] = useState(initialState)

  const handleSubmit = () => {
    
  }
  const handleChange = (e) => {
    e.preventDefault()
    // setFormData({...setFormData})
  }
  return (
    <div>
      <div className="signup-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h3 className="welcome ">Sign In to JobsWay.</h3>
          <input onChange={handleChange} name="email" placeholder="Email or Phone" className="input" type="email" />
          <input onChange={handleChange} name="password" placeholder="Password" className="input" type="password" />
        </form>
        <button className="primary mt-4" type="submit">
          Sign In
        </button>
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
