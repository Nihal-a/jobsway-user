import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { forgotPassword } from "../actions/auth";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const initialState = { phone : '' }

const ForgotPassword = () => {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData,[e.target.name] : e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(formData , history))
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center container mx-auto mt-28 flex-col">
            <div className="text-center flex flex-col items-center justify-center mt-24">
                <h3 className="text-3xl font-semibold mt-4">Reset Password.</h3>
                <p className="text-center mt-3">Verify your phone number with OTP for setting the new Password</p>
            </div>
            <input
              onChange={handleChange}
              type="tel"
              name="phone"
              id=""
              placeholder="Phone Number"
              className="bg-secondary p-4 m-2 mt-5 rounded-md w-1/4"
              required
            />
            <button className="py-2 px-7 rounded-md text-white mt-3 bg-primary" onClick={handleSubmit}>Get OTP</button>
      </div>
      <div className="absolute bottom-0">
         <Footer/>
      </div>
    </div>
  );
};

export default ForgotPassword;
