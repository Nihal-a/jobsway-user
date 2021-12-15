import React, { useEffect, useState } from 'react';
import OtpInput from 'otp-input-react';
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import { signup, verifyotp } from '../actions/auth';
import { useLocation,useHistory} from 'react-router';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';



function VerifyOtp() {

    const [otp, setOtp] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const otpDetails = {userDetails : location.state.formData,otp,phone:location.state.formData.phone}
        setLoading(true)
        dispatch(verifyotp(otpDetails,history,setLoading))
    }

    useEffect(() => {

    }, [location])

    if(loading){
        return <LoadingSpinner />
    }

    const inputStyle = {
        backgroundColor : '#f2f2f2',
        width : '90px',
        height : '100px',
        fontSize : '60px'
    }

    const handleResend = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(signup(location.state.formData,history,setLoading))
    }

    return (
        <>
            <Navbar hide={true} />
            <div className="flex items-center flex-col justify-center text-center h-screen">
                <h4 className="text-5xl font-semibold mb-4">Enter your Verification Code.</h4>
                <h6 className="text-xl text-dark mb-4 font-light">We have sent a verification code to <span className="font-semibold">{`+91 ${location.state.formData.phone}`}</span></h6>
                {location.state.Err && <p className="text-red-800 text-lg mb-3" style={{color:'red'}} >{location.state.Err}</p>}
                <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        inputStyles={inputStyle}
                        autocomplete="off"
                    />
                    <button className="bg-green-600 px-10 py-3 mt-10 mb-5 rounded-md text-white hover:bg-green-700" type="submit" style={{ color: 'white' }}>Submit OTP</button>
                </form>
                <Link onClick={handleResend} className="mt-3 hover:underline text-dark">Haven't received yet? Resend OTP.</Link>
            </div>
        </>
    )
}

export default VerifyOtp

