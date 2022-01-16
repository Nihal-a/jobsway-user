import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import googleLogo from '../assets/images/googleLogo.png'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { getUserAppliedJobs } from '../actions/jobs'
import { useSelector } from 'react-redux'

const MyJobs = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.job)

    useEffect(() => {
    }, [])
    
    dispatch(getUserAppliedJobs(user?.user._id))
   
    jobs.map((job) => {
        console.log("This is : ",job);
    })

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
                                <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">Kerala , India</p>
                    </div>
                            </div>
                        </div>
                        <h2 className="text-white text-3xl font-semibold">{ 'web Dev'  }</h2>
                        <div className="flex items-center  text-white">
                            <p>Status : </p>
                            <div className="py-2 px-4 ml-3 font-semibold rounded-md" style={{backgroundColor:'#FFE39C', color : '#945900'}}>PENDING</div>
                            {/* <div className="py-2 px-4 ml-3 font-semibold rounded-md" style={{backgroundColor:'#03C852', color : '#016717'}}>APPROVED</div>
                            <div className="py-2 px-4 ml-3 font-semibold rounded-md" style={{backgroundColor:'#FF4E4E', color : '#680000'}}>REJECTED</div> */}
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default MyJobs
