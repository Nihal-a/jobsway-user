import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom'

export default class VerifyOtp extends Component {
    state = { otp: '' };

    handleChange = (otp) => this.setState({ otp });

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.otp);
    }

    render() {
        return (
            <div className="flex items-center flex-col justify-center h-screen text-center">
                <h4 className="text-5xl font-semibold mb-4">Enter your Verification Code.</h4>
                <h6 className="text-xl text-secondary mb-4 font-light">We have sent a verification code to <span className="font-semibold">+91 9048133817</span></h6>
                <form action="" className="flex flex-col items-center" onSubmit={this.handleSubmit}>
                    <OtpInput
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={6}
                        separator={<span>-</span>}
                        containerStyle="text-7xl"
                        inputStyle="bg-secondary text-black"
                    />
                    <button className="bg-green-600 px-10 py-3 mt-10 mb-5 rounded-md text-white hover:bg-green-700" type="submit" style={{ color: 'white' }}>Submit OTP</button>
                </form>
                <Link className="mt-3 hover:underline text-secondary">Haven't received yet? Resend OTP.</Link>
                <Link className="mt-1 hover:underline text-secondary">Wrong phone number ? Change number.</Link>
            </div>
        );
    }
}
