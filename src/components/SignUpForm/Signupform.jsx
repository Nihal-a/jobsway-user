import React from 'react'
import PrimaryButton from '../Buttons/primary/PrimaryButton'
import {LinkedInLoginButton, GoogleLoginButton} from 'react-social-login-buttons'
import './style.css'

function Signupform() {
    return (
        <div className="signup-wrapper">
            <form action="" >
            <h3 className="welcome">Welcome to jobsWay.</h3>
            <div className="inp-wrap d-flex" style={{marginTop :'1rem'}}>
                <input placeholder="First Name" className="input" type="text" />
                <input placeholder="Last Name" className="input" type="text" />
            </div>
            <input placeholder="Email" className="input" type="email" />
            <input placeholder="Password" className="input" type="password" />
            <input placeholder="Confirm Password" className="input" type="password" style={{marginBottom :'2rem'}}/>
            </form>
            <button className="primary" type='submit'>Sign Up</button>
            <br />
            <p>Or</p>
            <div className="" style={{width:'270px'}}>
            <GoogleLoginButton />
            <LinkedInLoginButton/>
            </div>
        </div>
    )
}

export default Signupform
