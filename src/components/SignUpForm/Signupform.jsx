import React,{useState,useEffect} from "react";
import { Link,useHistory,useLocation} from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import "./style.css";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/auth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { SIGNUP } from "../../constants/actionTypes";
import { Icon } from '@iconify/react';


const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}

function Signupform() {


    const [formData, setFormData] = useState(initialState)
    const [passwordErr, setPasswordErr] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
      location.state = undefined
    },[location])

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

    const googleFaliure = (err) => {
      console.log("Google sigin error : ",err);
    }
    const googleSuccess = async (res) => {
      const result = res?.profileObj
      const token = res?.tokenId
      console.log(res);
      const user = {email : result.email , firstName:result.givenName , lastName:result?.familyName , password:res.googleId}
      console.log(user);
      try {
        dispatch(signup(user,history))
        history.push('/')
      } catch (error) {
        console.log("Google sign err : "+error);
      }
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
        <div className="bg-white w-full py-3 rounded-md mb-1 flex items-center justify-start p-4 border cursor-pointer hover:bg-secondary">
        <Icon icon="bi:phone-fill" className="m-0 p-0 text-2xl"/>
          <p className="ml-2 text-lg">Sign Up with Phone</p>
          </div>
        <GoogleLogin 
          clientId="451599435195-j8s2c83afli67b885bstah4nt1cuao8f.apps.googleusercontent.com"
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}/>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFaliure}
          cookiePolicy="single_host_origin"
        />
        <p className="mt-4">
          Already in jobsWay?
          <Link to="/signin" style={{ color: "#008FAE" }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signupform;
