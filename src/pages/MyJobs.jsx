import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { getUserAppliedJobs } from '../actions/jobs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTaskOfUser } from '../actions/user'
import TaskCard from '../components/TaskCard/TaskCard'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { useMediaQuery } from 'react-responsive'


const MyJobs = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const appliedJobs = useSelector(state => state?.user?.appliedJobs)
    const tasks = useSelector(state => state?.user?.tasks)
const [loading, setLoading] = useState(false);
const isTablet = useMediaQuery({ query: `(max-width: 640px)` });
const isMobile = useMediaQuery({ query: `(max-width: 530px)` });


    useEffect(() => {
        dispatch(getUserAppliedJobs(user?.user._id))
        dispatch(getTaskOfUser(user?.user._id))
    }, [])

if(loading){
    return <LoadingSpinner />
}

    
    return (
        <div>
            <Navbar />

            <div className="container mx-auto max-w-screen-lg mt-28 p-3">
            <h4 className="text-2xl font-semibold">Jobs <span className="text-primary">Tasks :</span> </h4>

                    <div className="my-4 flex gap-3">

                        {
                            !tasks.length == 0 ? tasks.map((task) => (
                                <TaskCard task={task} setLoading={setLoading}/>
                            )) : <p className='text-center mt-4 text-danger'>No New Tasks.</p>
                        }

                    </div>
            
                <h4 className="text-2xl font-semibold">My <span className="text-primary">Job Status :</span> </h4>
                            <div className="">

                            { !appliedJobs.length == 0 ? appliedJobs.map((appliedJob) => (

                                    <Link to={`/jobdetails/${appliedJob?.appliedJobs?.id}`} className={`bg-black w-full h-auto my-4 rounded-lg p-4 flex items-center justify-between ${isMobile ? 'flex-col gap-5' : 'flex-row'}`}>
                                    <div className="flex items-center">
                                        <img src={appliedJob?.companyDetails[0]?.logoUrl} alt="" className={`${isTablet ? 'w-12 h-12' : 'w-16 h-16'} rounded-md`} />
                                        <div className="ml-3 text-white">
                                            <h4>{appliedJob?.companyDetails[0]?.companyName}</h4>
                                            <div className="text-sm text-secondary flex items-center">
                                    <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{appliedJob?.jobDetails[0]?.jobLocation}</p>
                                    </div>
                                        </div>
                                    </div>
                                    <h2 className={`text-white font-semibold ${isTablet ? 'text-xl' : 'text-3xl' }`}>{ appliedJob?.jobDetails[0]?.jobTitle  }</h2>
                                    <div className="flex items-center  text-white">
                                        <p>Status : </p>
                                        <div className={`ml-3 font-semibold rounded-md ${isTablet ? 'py-1 px-2 text-xs' : 'py-2 px-4 text-md'}`} style={{backgroundColor:  appliedJob?.appliedJobs?.status == 'PENDING' ? '#FFE39C' : [ appliedJob?.appliedJobs?.status == 'APPROVED' ? '#03C852' : [appliedJob?.appliedJobs?.status == 'REJECTED' ? '#FF4E4E' : [ appliedJob?.appliedJobs?.status == "SHORTLISTED" && '#A0AAFF' ] ]  ], color : appliedJob?.appliedJobs?.status == 'PENDING' ?  '#945900' : [ appliedJob?.appliedJobs?.status == 'APPROVED' ? '#016717' : [appliedJob?.appliedJobs?.status == 'REJECTED' && '#680000' ]  ]}}>{appliedJob?.appliedJobs?.status}</div>
                                        {/* <div className="py-2 px-4 ml-3 font-semibold rounded-md" style={{backgroundColor:'#03C852', color : '#016717'}}>APPROVED</div>
                                        <div className="py-2 px-4 ml-3 font-semibold rounded-md" style={{backgroundColor:'#FF4E4E', color : '#680000'}}>REJECTED</div> */}
                                    </div>
                                    </Link>

                            )) : <><p className='text-center mt-4 text-danger'>Currently , You have not applied For any jobs.</p></> }
                </div>

                
            </div>
        </div>
    )
}

export default MyJobs
