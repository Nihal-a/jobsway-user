import React from 'react'
import { Link } from 'react-router-dom'

function PostJob() {
    return (
        <div className="container w-full mx-auto h-46 bg-primary rounded-md p-8 mb-8 flex items-center justify-between">
            <div className="">
                <h4 className="text-3xl font-semibold text-white">Does your company needs great employees?</h4>
                <p className="text-lg text-white mt-5 ">Post the job and hire the right one for your company.</p>
            </div>
            <Link className="text-primary bg-white py-3 px-20 rounded-md text-lg font-semibold">Post a Job</Link>
        </div>
    )
}

export default PostJob
