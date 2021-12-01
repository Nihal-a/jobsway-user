import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const JobDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-28 flex ">
                <div className="flex flex-col w-1/2">
                    <div className="">
                        <h3 className="text-4xl font-semibold">Sr.Web Devoloper</h3>
                        <div className="flex items-center">
                        <span className="flex items-center mt-2">
                            <Icon icon="bx:bx-rupee" height="28" color="#00B512" />
                            <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>30000 - 50000</h6>
                        </span>
                        <p className="mt-2 ml-8">Full-Time</p>
                        </div>
                    </div>
                    <div className=" mt-10">
                        <h6 className="font-semibold">Qualifications : </h6>
                        <div className="pl-4 mt-2">
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used .</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used .</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used .</li>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <h6 className="font-semibold">Education : </h6>
                        <h4 className="text-lg ml-4"> Bachelor of Computer Application</h4>
                    </div>
                    <div className="mt-10 flex items-start">
                        <h6 className="font-semibold">Languages : </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            <span className="text-lg font-medium mx-2">English</span>
                            <span className="text-lg font-medium mx-2">Arabic</span>
                            <span className="text-lg font-medium mx-2">Malayalam</span>
                            <span className="text-lg font-medium mx-2">Arabic</span>
                            <span className="text-lg font-medium mx-2">Malayalam</span>
                        </div>
                    </div>
                    <div className="mt-10 flex items-start">
                        <h6 className="font-semibold">Skills : </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">HTML</span>
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">CSS</span>
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">JS</span>
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">REACT</span>
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">MONGO DB</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <Link className="text-white py-2 px-28 rounded-lg" style={{backgroundColor:'#0060A5'}}>Apply Now</Link>
                    </div>
                </div>
                <div className="w-1/2">

                </div>
            </div>
        </div>
    )
}

export default JobDetails
