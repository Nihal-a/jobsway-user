import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Icon } from '@iconify/react';
import googleLogo from '../assets/images/googleLogo.png'
import { Link , useLocation} from 'react-router-dom';
import JobCard from '../components/JobCard/JobCard';
import { useDispatch } from 'react-redux';
import { getCompanyDetails } from '../actions/company';
import { useSelector } from 'react-redux';
import { getCompanyJobs } from '../actions/jobs';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const CompanyDetails = () => {

    const {cid} = useParams() 
    const dispatch = useDispatch()
    const location = useLocation()
  const isMobile = useMediaQuery({ query: `(max-width: 790px)` });

    
    useEffect(() => {
        dispatch(getCompanyDetails(cid))
    }, [])
    
    const {company} = useSelector(state => state.company)


    return (
        <div>
            <Navbar />

            <div className={`mt-28 flex container mx-auto ${isMobile ? 'flex-col' : 'flex-row'}`}>
                <div className="flex-1 p-3">
                    <div className="w-full p-5 flex flex-col items-center shadow-2xl ">
                        <img src={company?.logoUrl} alt="" className="w-20 h-20 rounded-md shadow-xl"/>
                        <h5 className="font-semibold text-xl mt-3">{company?.companyName}</h5>
                        <h6 className="text-dark text-md mt-3">{company?.industry}</h6>
                        <div className="text-xl flex items-center justify-between w-full p-6">
                            {!isMobile && <>
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
                            </div></>}
                            <div className="">
                                <h6 className="font-semibold mt-4"><Link className="underline">{company?.website}</Link></h6>
                                <h6 className="font-semibold mt-4">{company?.location}</h6>
                                <h6 className="font-semibold mt-4">{company?.email}</h6>
                                <h6 className="font-semibold mt-4">{company?.phone}</h6>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full px-6 mt-4">
                            <h5 className="font-semibold text-md">Bio : </h5>
                            <p className="mt-2 text-md">{company?.bio}</p>
                        </div>
                        <div className="flex text-2xl mt-8 w-2/5 justify-around ">
                            <a target='_blank' href={`https://www.linkedin.com/in/${company?.linkedIn}`}><Icon icon="akar-icons:linkedin-fill" /></a>
                            <a target='_blank' href={`https://www.instagram.com/${company?.instagram}`}><Icon icon="ant-design:instagram-filled" /></a>
                            <a target='_blank' href={`https://twitter.com/${company?.twitter}`}><Icon icon="akar-icons:twitter-fill" /></a>
                            <a target='_blank' href={`https://www.facebook.com/${company?.facebook}`}><Icon icon="akar-icons:facebook-fill" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {/* <h5 className="p-6 text-xl">Jobs by <span className="font-semibold text-primary"> {company?.companyName} </span></h5>
                    <div className="">
                        {
                            !company?.jobs == 0 ? <>{ company?.jobs.map((job) => (
                                <JobCard job={job}/>
                            )) }</> : <p className='text-danger'>No Jobs Found</p>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails
