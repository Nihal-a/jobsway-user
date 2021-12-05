import React from 'react'
import Navbar from '../components/navbar/Navbar'
import googleLogo from '../assets/images/googleLogo.png'


const MyJobs = () => {
    return (
        <div>
            <Navbar />

            <div className="container mx-auto max-w-screen-lg mt-28">
                <h4 className="text-2xl font-semibold">My <span className="text-primary">Job Details :</span> </h4>
                <div className="">
                    <div className="bg-black w-full h-24 my-4 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={googleLogo} alt="" className="w-16 h-16 rounded-md" />
                            <div className="ml-3 text-white">
                                <h4>Google</h4>
                                <p>Bengluru india</p>
                            </div>
                        </div>
                        <h2 className="text-white text-3xl font-semibold">Sr. Web Developer</h2>
                        <div className="flex items-center  text-white">
                            <p>Status : </p>
                            <div className="py-2 px-4 bg-primary ml-3 font-semibold rounded-md">PENDING</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyJobs
