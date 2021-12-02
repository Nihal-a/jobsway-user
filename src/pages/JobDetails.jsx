import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams , useLocation} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import googleLogo from '../assets/images/googleLogo.png'
import { useDispatch } from 'react-redux'
import { getCompanyDetails } from '../actions/company'
import { useSelector } from 'react-redux'
import moment from 'moment'

const JobDetails = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const jobDetails = location?.state.jobDetails
    const {company} = useSelector(state => state.company)
    
    
    useEffect(() => {
        dispatch(getCompanyDetails(jobDetails.companyId))
    },[])

    
    const postedDate = moment(jobDetails.createdAt , "YYYYMMDDhmmssa").format('l');
    
    console.log(company);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-28 flex ">
                <div className="flex flex-col w-1/2">
                    <div className="">
                        <h3 className="text-4xl font-semibold">{jobDetails?.jobTitle}</h3>
                        <div className="flex items-center">
                        <span className="flex items-center mt-2">
                            <Icon icon="bx:bx-rupee" height="28" color="#00B512" />
                            <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>{jobDetails?.minSalary} - {jobDetails?.maxSalary}</h6>
                        </span>
                        <p className="mt-2 ml-8">{jobDetails?.timeSchedule}</p>
                        </div>
                    </div>
                    <div className=" mt-10">
                        <h6 className="font-semibold">Qualifications : </h6>
                        <div className="pl-4 mt-2">
                            {jobDetails?.qualification.map((qualif) => (
                                <li>{qualif.qualification}</li>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <h6 className="font-semibold">Education : </h6>
                        <h4 className="text-lg ml-4"> {jobDetails?.education}</h4>
                    </div>
                    <div className="mt-10 flex items-start">
                        <h6 className="font-semibold">Languages : </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            {jobDetails?.language.map((lang) => (
                                <span className="text-lg font-medium mx-2">{lang}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex items-start">
                        <h6 className="font-semibold">Skills : </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            {jobDetails?.skills.map((skill) => (
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <Link to="/apply-job" className="text-white py-2 px-28 rounded-lg" style={{backgroundColor:'#0060A5'}}>Apply Now</Link>
                    </div>
                </div>
                <div className="w-1/2">
                <div className="mt-10 flex flex-col w-full">
                        <h6 className="font-semibold">Job Overview : </h6>
                        <div className="w-full text-xl h-auto pl-3 flex mt-2 justify-around ">
                            <div className="flex flex-col  w-full justify-between">
                                <p className="mt-2">Expirence</p>
                                <p className="mt-2">Posted Date</p>
                                <p className="mt-2">No. of Applicants</p>
                            </div>
                            <div className="flex flex-col w-1/4 justify-between">
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                            </div>
                            <div className="flex flex-col  w-full justify-between">
                                <p>{jobDetails?.minExp}-8 Years</p>
                                <p>{postedDate}</p>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                <Link to="/company-details" className="mt-10 flex flex-col w-full ">
                        <h6 className="font-semibold text-lg">Company : </h6>
                        <div className="p-10">
                            <div className="w-full h-80 shadow-xl rounded-2xl flex flex-col items-center justify-center">
                                <img src={company?.imgUrl} alt="" className="shadow-lg rounde w-20 rounded-lg" />
                                <h5 className="mt-4 font-semibold text-2xl">{company?.companyName}</h5>
                                <div className="text-sm mt-2 flex items-center">
                        <Icon icon="akar-icons:location" className="text-primary"/><p className="text-primary ml-1">{company?.location}</p>
                    </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
