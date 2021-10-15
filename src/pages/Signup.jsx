import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Signupform from '../components/SignUpForm/Signupform'

function signup() {
    return (
        <div>
            <Navbar hide={true}/>
            <Signupform />
        </div>
    )
}

export default signup
