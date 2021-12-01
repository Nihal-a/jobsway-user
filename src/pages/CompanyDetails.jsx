import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Icon } from '@iconify/react';
import googleLogo from '../assets/images/googleLogo.png'
import { Link } from 'react-router-dom';

const CompanyDetails = () => {
    return (
        <div>
            <Navbar />

            <div className="mt-28 flex container mx-auto">
                <div className="w-1/2 p-8 ">
                    <div className="w-full p-5 flex flex-col items-center shadow-2xl">
                        <img src={googleLogo} alt="" className="w-20 h-20 rounded-md shadow-xl"/>
                        <h5 className="font-semibold text-xl mt-3">Google</h5>
                        <h6 className="text-dark text-md mt-3">Information Technology</h6>
                        <div className="text-xl flex items-center justify-between w-full p-6">
                            <div className="">
                                <span className="flex mt-4 items-center">
                                    <Icon icon="clarity:world-line" />
                                    <p className="ml-3">Website</p>
                                </span>
                                <span className="flex mt-4 items-center">
                                <Icon icon="akar-icons:location" />
                                    <p className="ml-3">Location</p>
                                </span>
                                <span className="flex mt-4 items-center">
                                <Icon icon="ant-design:mail-outlined" />
                                    <p className="ml-3">Email</p>
                                </span>
                                <span className="flex mt-4 items-center">
                                <Icon icon="fluent:call-32-regular" />
                                    <p className="ml-3">Phone</p>
                                </span>
                            </div>
                            <div className="mx-2">
                                <p className="mt-4"> : </p>
                                <p className="mt-4"> : </p>
                                <p className="mt-4"> : </p>
                                <p className="mt-4"> : </p>
                            </div>
                            <div className="">
                                <h6 className="font-semibold mt-4">www.google.com</h6>
                                <h6 className="font-semibold mt-4">Bengaluru, India</h6>
                                <h6 className="font-semibold mt-4">google@mail.com</h6>
                                <h6 className="font-semibold mt-4">2122908736</h6>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full px-6 mt-4">
                            <h5 className="font-semibold text-md">Bio : </h5>
                            <p className="mt-2 text-md">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                        </div>
                        <div className="flex text-2xl mt-8 w-2/5 justify-around ">
                            <Link><Icon icon="akar-icons:linkedin-fill" /></Link>
                            <Link><Icon icon="ant-design:instagram-filled" /></Link>
                            <Link><Icon icon="akar-icons:twitter-fill" /></Link>
                            <Link><Icon icon="akar-icons:facebook-fill" /></Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
    )
}

export default CompanyDetails
