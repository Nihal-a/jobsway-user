import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import noImage from '../assets/images/noImage.jpg'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { GetUserDetails } from '../actions/user';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useSelector } from 'react-redux';
import SkillButton from '../components/skill/SkillButton';

const MyProfile = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const userDetails = useSelector((state) => state.user.userDetails)


    useEffect(() => {
        dispatch(GetUserDetails(user?.user?._id, setLoading))
      },[])


    if(loading) {
        return <LoadingSpinner />
    }

    console.log(userDetails);
    

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-28 flex items-center justify-center">
                <div className="flex-1 h-auto p-5 w-96 mt-10">
                    <div className="w-full h-full bg-white shadow-2xl rounded-lg p-5 flex flex-col items-center">
                        <img src={userDetails?.imgUrl ? userDetails.imgUrl : noImage} alt="" className='w-52 h-52 mt-7'/>
                        <h4 className='mt-2 font-semibold text-2xl'>{userDetails?.name ? userDetails?.name : 'No name'}</h4>
                        <h6 className='text-xl'>{userDetails?.designation ? userDetails?.designation : 'No Designation'}</h6>
                        <div className="flex mt-2">
                        {userDetails?.github && <a target={'_blank'} href={userDetails?.github}><Icon icon="akar-icons:github-fill" height="30" className='m-2' /></a>}
                        {userDetails?.linkedIn && <a target={'_blank'} href={userDetails?.linkedIn}><Icon icon="ant-design:linkedin-filled" height="30" className='m-2' /></a>}
                        {userDetails?.instagram && <a target={'_blank'} href={userDetails?.instagram}><Icon icon="ant-design:instagram-filled" height="30" className='m-2' /></a>}
                        {userDetails?.twitter && <a target={'_blank'} href={userDetails?.twitter}><Icon icon="akar-icons:twitter-fill" height="30" className='m-2' /></a>}
                        {userDetails?.facebook && <a target={'_blank'} href={userDetails?.facebook}><Icon icon="akar-icons:facebook-fill" height="30" className='m-2' /></a>}
                        </div>
                    </div>
                       <div className="w-full flex justify-around mt-7 text-xl underline">
                       {userDetails?.resumeUrl ? <a target={'_blank'} href={userDetails?.resumeUrl}>Resume Link</a> : <a>No Resume Link</a>}
                       {userDetails?.portfolio ? <a target={'_blank'} href={userDetails?.portfolio}>Portfolio Link</a> : <a>No Portfolio Link</a>}
                       </div>
                </div>
                <div className="flex-1 p-5 h-auto">
                    <div className="m-5">
                        <h4 className='text-xl'>Details : </h4>
                        <div className="flex justify-start gap-10 text-xl items-center m-3">
                            <div className="flex items-center">
                            <Icon icon="akar-icons:location" />
                            <h3 className='ml-4'>Location</h3>
                            </div>
                            {userDetails?.location ? <h3 className='font-semibold'>{userDetails.location}</h3> : <p>Not provided</p>}
                        </div>
                        <div className="flex justify-start gap-10 text-xl items-center m-3">
                            <div className="flex items-center">
                            <Icon icon="ant-design:mail-outlined" />
                            <h3 className='ml-4'>Email</h3>
                            </div>
                            {userDetails?.email ? <h3 className='font-semibold'>{userDetails?.email}</h3> : <p>Not Prvided</p>}
                        </div>
                        <div className="flex justify-start gap-10 text-xl items-center m-3">
                            <div className="flex items-center">
                            <Icon icon="akar-icons:phone" />
                            <h3 className='ml-4'>Phone</h3>
                            </div>
                            {userDetails?.phone ? <h3 className='font-semibold'>{userDetails?.phone}</h3> : <p>Not provided</p>}
                        </div>
                    </div>
                    <div className="m-5">
                        <h4 className='text-xl mt-3'>Skills : </h4>
                        <div className=" w-5/6 text-center p-3">
                            <div className="w-full flex flex-wrap items-center justify-start">
                                {
                                    userDetails?.skill  ? userDetails?.skill.map((skill) => (
                                        <SkillButton skill={skill}/>
                                    )) : <p>No Skills Provided</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-end">
                    <Link to={`/update-profile/${user?.user?._id}`} className='bg-secondary p-3 rounded-md flex items-center gap-3'><p>Update Profile</p> <Icon icon="akar-icons:pencil" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile


