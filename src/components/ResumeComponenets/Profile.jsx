import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";

const Profile = ({nextStep , prevStep , handleChange , formData}) => {

    const [Err, setErr] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
     setErr({})
    }, [formData]);
    

const handleNext = () => {
    // e.preventDefault()
    nextStep()
}


  return <div className='w-full'>
           <h3 className='text-xl text-center'>Personal Information</h3>
      <div className="bg-secondary p-10 rounded-md w-full mt-3">
      <div className="flex flex-col">
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Full Name *
            </label>
            {errors.fullName?.type === 'required' && <p className="text-red-500 text-xs italic">First Name is Required</p>}
            <input {...register("fullName", { required: true })} value={formData.fullName} name='fullName' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Job Title *
            </label>
            {errors.jobTitle?.type === 'required' && <p className="text-red-500 text-xs italic">Designation is Required</p>}
            <input {...register("jobTitle", { required: true })} value={formData.jobTitle} name='jobTitle' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Email *
            </label>
            {errors.email && <p className="text-red-500 text-xs italic">Enter a Valid email address</p>}
            <input {...register("email", { required: true , pattern : {  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email', } })} value={formData.email} name='email' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Phone *
            </label>
            {errors.phone && <p className="text-red-500 text-xs italic">Enter a Valid Phone Number</p>}
            <input  {...register("phone", { required: true , pattern : {  value: /^\d{10}$/, message: 'Please enter a valid email', } })} value={formData.phone} name="phone" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Portfolio
            </label>
            <input value={formData.portfolio}  name="portfolio" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Github
            </label>
            <input value={formData.github}  name="github" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Linked In
            </label>
            <input value={formData.linkedIn}  name='linkedIn' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Twitter
            </label>
            <input value={formData.twitter}  name="twitter" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Facebook
            </label>
            <input value={formData.facebook}  name='facebook' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Instagram
            </label>
            <input value={formData.instagram}  name="instagram" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>

       </div>
       <div className="flex items-center justify-center font-light">
        <Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
        <Button className="m-2" onClick={handleSubmit(handleNext)}>Next</Button>
       </div>
     </div>
      </div>
  </div>;
};

export default Profile;
