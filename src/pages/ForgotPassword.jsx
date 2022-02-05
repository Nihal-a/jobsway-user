import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { forgotPassword } from "../actions/auth";
import Footer from "../components/footer/Footer";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Navbar from "../components/navbar/Navbar";
import { useForm } from "react-hook-form";


const initialState = { phone : '' }

const ForgotPassword = () => {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit: validateSubmit } = useForm();

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData,[e.target.name] : e.target.value})
  };
  const handleSubmit = () => {
    setLoading(true)
    dispatch(forgotPassword(formData , history , setLoading))
  };


  if(loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center container mx-auto mt-28 flex-col p-4">
            <div className="text-center flex flex-col items-center justify-center mt-24">
                <h3 className="text-3xl font-semibold mt-4">Reset Password.</h3>
                <p className="text-center mt-3">Verify your phone number with OTP for setting the new Password</p>
            </div>
            <form onSubmit={validateSubmit(handleSubmit)} action="" className="flex flex-col items-center w-3/4 text-left">
            <input
              {...register("phone", { required:  true  , minLength:10 , maxLength:10 , pattern : { value : /^[0-9]{10}$/ }})}
              onChange={handleChange}
              type="tel"
              name="phone"
              id=""
              placeholder="Phone Number"
              className="bg-secondary p-4 m-2 mt-5 rounded-md w-3/4 max-w-sm"
              />
              {errors.phone  && <p className="text-danger text-xs text-left m-1">Enter a Valid Phone Number</p>}

            <button className="py-2 px-7 rounded-md text-white mt-3 bg-primary" type="submit">Get OTP</button>
            </form>
      </div>
      <div className="absolute bottom-0">
         <Footer/>
      </div>
    </div>
  );
};

export default ForgotPassword;
