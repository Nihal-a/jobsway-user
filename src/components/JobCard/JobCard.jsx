import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'
import { Icon } from '@iconify/react';
import moment from 'moment';
import { useDispatch,useSelector } from 'react-redux';
import { getCompanyDetails } from '../../actions/company';
import ReactPaginate from 'react-paginate'



function JobCard({job}) {

    return (
        <div className="w-full h-62 rounded-md p-4 mt-2" style={{ backgroundColor: '#2c2c2c' }}>
            <div className="flex justify-between">
                <Link className="flex items-center">
                    <img src={job?.companyDetails[0].logoUrl} alt="company logo" className="w-14 h-14 rounded-md" />
                    <div className="ml-3">
                    <h6 className=" text-2xl font-semibold text-white">{job?.companyDetails[0].companyName}</h6>
                    <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{job?.jobLocation}</p>
                    </div>
                    </div>
                </Link>
                <div className="text-white">{moment(job?.createdAt , "YYYYMMDDhmmssa").startOf('hour').fromNow()}</div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white mt-3">{job?.jobTitle}</h2>
                <div className="flex items-center">
                    <span className="flex items-center mt-2">
                        <Icon icon="bx:bx-rupee" height="34" color="#00B512" />
                        <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>{job?.minSalary} - {job?.maxSalary}</h6>
                    </span>
                    <h5 className="text-white font-light mt-2 ml-5">{job?.timeSchedule}</h5>
                </div>
            </div>
            <div className="flex justify-between mt-2 ml-2">
                <p className="text-white">{job?.minExp} - {job?.maxExp} year of Experience</p>
                <Link to={{pathname:`/jobdetails/${job?._id}` , state : {jobDetails : job}}} className="bg-white text-primary py-2 px-4 rounded-md font-semibold">Know More</Link>
            </div>
        </div>
    )
}

export default JobCard

