import React from 'react'
import { Link } from 'react-router-dom'

function PostJob() {
    return (
       <div className="p-3">
            <div className="container w-full mx-auto h-46 bg-primary rounded-md p-8 mb-8 flex items-center justify-between flex-col lg:flex-row gap-4">
            <div className="">
                <h4 className="text-2xl font-semibold text-white md:text-3xl">Does your company needs great employees?</h4>
                <p className="text-md md:text-lg text-white mt-5 ">Post the job and hire the right one for your company.</p>
            </div>
            <a href="https://company.jobsway.online/" target={'_blank'} className="">Post a Job</a>
        </div>
       </div>
    )
}

export default PostJob
