import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./style.css";
import { useDispatch } from "react-redux";
import { signup,sendotp,googlesign} from "../../actions/auth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Icon } from '@iconify/react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', type: '',captcha:''}

function Signupform() {


  const [formData, setFormData] = useState(initialState)
  const [withPhone, setWithPhone] = useState(false)
  const [captchaErr, setCaptchaErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [PhoneErr, setPhoneErr] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    withPhone && loadCaptchaEnginge(6)
  }, [withPhone])

  useEffect(() => {
    location.state = undefined
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (withPhone == true) {
      if(validateCaptcha(formData.captcha,false) !== true) return setCaptchaErr('Captcha verification failed')
      if(formData.phone.length !== 10) return setPhoneErr('Enter a valid phone number.')
      dispatch(sendotp(formData,history))
    } else {
      setPasswordErr('')
      if (formData.password !== formData.confirmPassword) setPasswordErr('Passwords does not match.')
      else dispatch(signup(formData, history))
    }
  }
  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const googleFaliure = (err) => {
    console.log("Google sigin error : ", err);
    history.push('/signup')
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    console.log(res);
    const user = { email: result.email, firstName: result.givenName, lastName: result?.familyName, password: res.googleId }
    try {
      dispatch(googlesign(user,history))
      history.push('/')
    } catch (error) {
      console.log("Google sign err : " + error);
    }
  }


  return (
    <div className="signup-wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h3 className="welcome pt-20">Welcome to JobsWay.</h3>
        {captchaErr ? <p className="text-red-800" style={{ color: "red" }}>{captchaErr}</p> : null}
        {PhoneErr ? <p className="text-red-800" style={{ color: "red" }}>{PhoneErr}</p> : null}
        {passwordErr ? <p className="text-red-800" style={{ color: "red" }}>{passwordErr}</p> : null}
        {location?.state?.Err.map((error) => (
          <p className="text-red-800" style={{ color: "red" }}>{error.msg}</p>
        ))}
        <div className="inp-wrap d-flex" style={{ marginTop: "1rem" }}>
          <input onChange={handleChange}  name="firstName" placeholder="First Name" className="input" type="text" />
          <input onChange={handleChange}  name="lastName" placeholder="Last Name" className="input" type="text" />
        </div>
        {!withPhone && <input onChange={handleChange}  name="email" placeholder="Email" className="input" type="email" />}
        {withPhone && <input onChange={handleChange}  name="phone" placeholder="Phone No." className="input" type="tel" />}
        <input onChange={handleChange}  name="password" placeholder="Password" className="input" type="password" />
        {withPhone && <div className="p-3 rounded-md m-1 h-30 flex flex-col items-center justify-center"><LoadCanvasTemplate/>
        </div>}
        {withPhone && <input onChange={handleChange}  name="captcha" placeholder="Enter the captcha" className="input" type="text" />}
        {!withPhone && <input
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input"
          type="password"
          style={{ marginBottom: "1rem" }}
          
        />}
        <button className="primary mt-2" type="submit">
          Sign Up
        </button>
      </form>
      <p>Or</p>
      <div className="" style={{ width: "270px" }}>
        <div className="bg-white w-full py-3 rounded-md mb-1 flex items-center justify-start p-4 border cursor-pointer hover:bg-secondary" onClick={() => setWithPhone(!withPhone)}>
          {!withPhone ? <> <Icon icon="bi:phone-fill" className="m-0 p-0 text-2xl" />
            <p className="ml-2 text-lg">Sign Up with Phone</p> </> : <><Icon icon="clarity:email-solid" className="m-0 p-0 text-2xl" />
            <p className="ml-2 text-lg">Sign Up with Email</p></>}
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
          )}
          onSuccess={googleSuccess}
          onFailure={googleFaliure}
          cookiePolicy="single_host_origin"
        />
        <p className="mt-1 pb-4">
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
