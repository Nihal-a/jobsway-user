import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams , useLocation} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import googleLogo from '../assets/images/googleLogo.png'
import { useDispatch } from 'react-redux'
import { getCompanyDetails } from '../actions/company'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { getJobDetailsById } from '../actions/jobs'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { useMediaQuery } from 'react-responsive'

const JobDetails = () => {
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [status, setStatus] = useState(false)
    const [premiumStatus, setPremiumStatus] = useState(false)
    const [loading, setLoading] = useState(true);
    const {jobDetailsByid : jobDetails} = useSelector(state => state.user)
  const isMobile = useMediaQuery({ query: `(max-width: 770px)` });

    

    useEffect(() => {
        dispatch(getJobDetailsById(id , setLoading ,setStatus , user))
        if(user?.user.count >= 3 && user?.user.premium == false) {
            setPremiumStatus(true)
        }
    }, []);

    
    
    
    if(loading){
        return <LoadingSpinner />
    }
    

    
    const postedDate = moment(jobDetails?.createdAt , "YYYYMMDDhmmssa").format('l')

   

   

    return (
        <div>
            <Navbar />
            <div className={`container mx-auto mt-28 flex ${isMobile && 'flex-col text-center'}`}>
                <div className={`flex flex-col flex-1 ${isMobile && 'justify-center items-center'}`}>
                    <div className="">
                        <h3 className="text-4xl font-semibold">{jobDetails?.jobTitle}</h3>
                        <div className={`flex items-center ${isMobile && 'justify-center'}`}>
                        <span className="flex items-center mt-2">
                            <Icon icon="bx:bx-rupee" height="28" color="#00B512" />
                            <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>{jobDetails?.minSalary} - {jobDetails?.maxSalary}</h6>
                        </span>
                        <p className="mt-2 ml-8">{jobDetails?.timeSchedule}</p>
                        </div>
                    </div>
                    <div className={`${isMobile ? 'mt-5' : 'mt-10'}`}>
                        <h6 className="font-semibold">Qualifications : </h6>
                        <div className="pl-4 mt-2">
                            {jobDetails?.qualification.map((qualif) => (
                                <li>{qualif}</li>
                            ))}
                        </div>
                    </div>
                    <div className={`mt-10 flex items-center ${isMobile && 'justify-cneter flex-col '}`}>
                        <h6 className="font-semibold">Education: </h6>
                        <h4 className="text-lg ml-4">{jobDetails?.education}</h4>
                    </div>
                    <div className={`mt-10 flex items-start  ${isMobile && 'justify-cneter flex-col text-center'}`}>
                        <h6 className={`font-semibold ${isMobile && 'w-full'}`}>Languages: </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            {jobDetails?.language.map((lang) => (
                                <span className="text-lg font-medium mx-2">{lang}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`mt-10 flex items-start ${isMobile && 'justify-center flex-col '}`}>
                        <h6 className={`font-semibold ${isMobile && 'w-full'}`}>Skills : </h6>
                        <div className="w-full max-w-xs h-auto pl-3 flex-wrap flex">
                            {jobDetails?.skills.map((skill) => (
                            <span className="text-md font-semibold text-white bg-primary px-5 py-2  m-1 rounded-lg">{skill}</span>
                            ))}
                        </div>
                    </div>
                    { !isMobile && <div className="flex items-center justify-center mt-4">
                        { premiumStatus ? <><button className="text-warning text-sm py-2 px-28 rounded-lg cursor-not-allowed" disabled style={{backgroundColor:'#dddddd'}} >Upgrade to Premium to <br /> Apply for more Jobs.</button> </> : <>{status ? <button className="text-success text-sm py-2 px-28 rounded-lg cursor-not-allowed" disabled style={{backgroundColor:'#dddddd'}} >You have Already Applied to this Job.</button> : <Link to={{pathname:"/apply-job" , state:{job : jobDetails}}} className="text-white py-2 px-28 rounded-lg" style={{backgroundColor:'#0060A5'}} >Apply Now</Link>}</>}
                    </div>}
                </div>
                <div className="flex-1">
                <div className="mt-10 flex flex-col w-full">
                        <h6 className="font-semibold">Job Overview : </h6>
                        <div className="w-full text-xl h-auto pl-3 flex mt-2 justify-around ">
                            <div className="flex flex-col  w-full justify-between">
                                <p className="mt-2">Expirence</p>
                                <p className="mt-2">Posted Date</p>
                            </div>
                            <div className="flex flex-col w-1/4 justify-between">
                                <span>:</span>
                                <span>:</span>
                            </div>
                            <div className="flex flex-col  w-full justify-between">
                                <p>{jobDetails?.minExp}-{jobDetails?.maxExp} Years</p>
                                <p>{postedDate}</p>
                            </div>
                        </div>
                    </div>
                <Link to={`/company-details/${jobDetails?.companyDetails[0]?._id}`} className="mt-10 flex flex-col w-full ">
                        <h6 className="font-semibold text-lg">Company : </h6>
                        <div className="p-10">
                            <div className="w-full h-80 shadow-xl rounded-2xl flex flex-col items-center justify-center">
                                <img src={jobDetails?.companyDetails[0]?.logoUrl} alt="" className="shadow-lg rounde w-20 rounded-lg" />
                                <h5 className="mt-4 font-semibold text-2xl">{jobDetails?.companyDetails[0]?.companyName}</h5>
                                <div className="text-sm mt-2 flex items-center">
                            <Icon icon="akar-icons:location" className="text-primary"/><p className="text-primary ml-1">{jobDetails?.companyDetails[0]?.location}</p>
                    </div>
                            </div>
                        </div>
                    </Link>

                    {isMobile && <div className="flex items-center justify-center pb-10 p-3">
                        { premiumStatus ? <><button className="text-warning text-sm py-2 px-28 rounded-lg cursor-not-allowed" disabled style={{backgroundColor:'#dddddd'}} >Upgrade to Premium to <br /> Apply for more Jobs.</button> </> : <>{status ? <button className="text-success text-sm py-2 px-14 rounded-lg cursor-not-allowed" disabled style={{backgroundColor:'#dddddd'}} >You have Already Applied to this Job.</button> : <Link to={{pathname:"/apply-job" , state:{job : jobDetails}}} className="text-white py-2 px-28 rounded-lg" style={{backgroundColor:'#0060A5'}} >Apply Now</Link>}</>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default JobDetails
