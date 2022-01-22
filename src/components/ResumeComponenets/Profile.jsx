import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Profile = ({nextStep , prevStep , handleChange , formData}) => {

    const [Err, setErr] = useState({});

    useEffect(() => {
     setErr({})
    }, [formData]);
    

const handleNext = (e) => {
    e.preventDefault()
    if(formData.fullName.trim().length == "") return setErr({name : 'Enter your name.'})
    if(formData.jobTitle.trim().length == "")  return setErr({jobTitle : 'Enter your JobTitle.'})
    if(formData.email.trim().length == "")  return setErr({email : 'Enter your Email Address.'})
    if(formData.phone.trim().length == "")  return setErr({phone : 'Enter your Phone Numebr'})
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
            {Err.name && <p className="text-red-500 text-xs italic">{Err.name}</p>}
            <input value={formData.fullName} name='fullName' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Job Title *
            </label>
            {Err.jobTitle && <p className="text-red-500 text-xs italic">{Err.jobTitle}</p>}
            <input value={formData.jobTitle} name='jobTitle' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Email *
            </label>
            {Err.email && <p className="text-red-500 text-xs italic">{Err.email}</p>}
            <input value={formData.email} name='email' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Phone *
            </label>
            {Err.phone && <p className="text-red-500 text-xs italic">{Err.phone}</p>}
            <input value={formData.phone} name="phone" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
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
        <Button className="m-2" onClick={handleNext}  >Next</Button>
       </div>
     </div>
      </div>
  </div>;
};

export default Profile;
