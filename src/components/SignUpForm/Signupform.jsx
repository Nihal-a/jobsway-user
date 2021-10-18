import React,{useState,useEffect} from "react";
import { Link,useHistory,useLocation} from "react-router-dom";
import {LinkedInLoginButton,GoogleLoginButton} from "react-social-login-buttons";
import "./style.css";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/auth";
const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}

function Signupform() {


    const [formData, setFormData] = useState(initialState)
    const [passwordErr, setPasswordErr] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
      location.state = undefined
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordErr('')
        if(formData.password !== formData.confirmPassword) setPasswordErr('Passwords does not match.')
        else dispatch(signup(formData,history))
    }
    const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name] : e.target.value})
    }
  return (
    <div className="signup-wrapper">

      <form action="" onSubmit={handleSubmit}>
        <h3 className="welcome ">Welcome to JobsWay.</h3>
        {passwordErr ? <p className="text-red-800">{passwordErr}</p> : null}
        {location.state !== undefined ? <p className="text-red-800">User already exists</p> : null}
        <div className="inp-wrap d-flex" style={{ marginTop: "1rem" }}>
          <input onChange={handleChange} required name="firstName" placeholder="First Name" className="input" type="text" />
          <input onChange={handleChange} required name="lastName" placeholder="Last Name" className="input" type="text" />
        </div>
        <input onChange={handleChange} required name="email" placeholder="Email" className="input" type="email" />
        <input onChange={handleChange} required name="password" placeholder="Password" className="input" type="password" />
        <input 
          onChange={handleChange}
          name="confirmPassword"  
          placeholder="Confirm Password"
          className="input"
          type="password"
          style={{ marginBottom: "2rem" }}
          required
          />
      <button className="primary" type="submit">
        Sign Up
      </button>
      </form>
      <br />
      <p>Or</p>
      <div className="" style={{ width: "270px" }}>
        <GoogleLoginButton />
        <LinkedInLoginButton />
        <p className="mt-4">
          Already in jobsWay?{" "}
          <Link to="/signin" style={{ color: "#008FAE" }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signupform;
