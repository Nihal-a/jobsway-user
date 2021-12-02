import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import noImage from "../assets/images/noImage.jpg";
import { Link } from 'react-router-dom';

const initialState = {firstName:'',email : '' , location : '' , lastName : '' , phone : '' , experience : '' , portfolio : ''}

const ApplyJob = () => {

    const [formData, setFormData] = useState(initialState)
  const [image, setImage] = useState(noImage);


    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(reader.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      };

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <div>
            <Navbar />

            <form className="container mx-auto mt-40 " onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold">Applying for <span className="text-primary">Sr. Web Developer</span></h2>
                <div className="mt-3 flex">
                    <div className="flex flex-col w-1/3 p-2 mt-3">
                        <input onChange={handleChange} type="text" name="firstName" id="" placeholder="First Name" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <input onChange={handleChange} type="text" name="email" id="" placeholder="Email" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <input onChange={handleChange} type="text" name="location" id="" placeholder="Location" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <div className="">
                            <label className="ml-3 mt-2 m-1" htmlFor="upload">Upload Resume : </label>
                        <input required type="file" name="upload" id="" className="bg-secondary p-4 ml-2 rounded-md" />
                        <p className="text-xs m-3">Don’t have one? No worries <Link className="text-primary underline"> Create a JobsWay Resume</Link></p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 p-2 mt-3">
                        <input onChange={handleChange} type="text" name="lastName" id="" placeholder="Last Name" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <input onChange={handleChange} type="text" name="phone" id="" placeholder="Phone" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <input onChange={handleChange} type="number" name="experience" id="" placeholder="Years of Exp." className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                        <input onChange={handleChange} type="text" name="portfolio" id="" placeholder="Portfolio link" className="bg-secondary p-4 m-2 mt-5 rounded-md" />
                    </div>
                    <div className="w-1/3">
                    <div className="w-full h-40 mt-4 flex items-center flex-col mt-24">
                    <img src={image} alt="no image" className="w-56 h-56 rounded-md" />
                        <div className="bg-black relative overflow-hidden h-14 mt-3 flex items-center p-4 rounded-md cursor-pointer">
                        <span className="text-sm text-white font-light cursor-pointer">
                           Upload Photo
                         </span>
                     <input
                            type="file"
                            className="absolute inset-0 text-md pointer opacity-0 w-28 h-16 bg-primary"
                            accept="image/*"
                            onChange={handleImageChange}
                            />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center mt-4">
                    <button className="py-3 px-20 bg-primary text-white rounded-md" type="submit">Confirm Application</button>
                </div>
            </form>
        </div>
    )
}

export default ApplyJob
