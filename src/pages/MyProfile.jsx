import React from 'react'
import Navbar from '../components/navbar/Navbar'
import noImage from '../assets/images/noImage.jpg'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-28 flex ">
                <div className="flex-1 h-auto p-5 sticky">
                    <div className="w-full h-full bg-white shadow-2xl rounded-lg p-5 flex flex-col items-center">
                        <img src={noImage} alt="" className='w-52 h-52 mt-7'/>
                        <h4 className='mt-2 font-semibold text-2xl'>Nihal Avulan</h4>
                        <h6 className='text-xl'>Mern Stack Developer</h6>
                        <div className="flex mt-2">
                        <Link><Icon icon="ant-design:linkedin-filled" height="30" className='m-2' /></Link>
                        <Link><Icon icon="ant-design:instagram-filled" height="30" className='m-2' /></Link>
                        <Link><Icon icon="akar-icons:twitter-fill" height="30" className='m-2' /></Link>
                        <Link><Icon icon="akar-icons:facebook-fill" height="30" className='m-2' /></Link>
                        </div>
                        <div className="mt-5 w-5/6 text-center p-3">
                            <h6 className='font-semibold text-xl'>Skills : </h6>
                            <div className="w-full flex flex-wrap items-center justify-start">
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>HTML</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>CSS</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>java</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>node</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>js</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>mongodb</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>microservices</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>react js</p>
                                <p className='uppercase mt-3 mx-3 px-5 text-white font-semibold rounded-md py-2 bg-primary w-max'>git</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-5 h-screen">

                </div>
            </div>
        </div>
    )
}

export default MyProfile
