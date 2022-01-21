import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFeaturedJobs } from '../../actions/jobs';
import JobCard from '../JobCard/JobCard';

function FeaturedJobs() {
   
    const featuredjobs = useSelector((state) => state.job)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getFeaturedJobs())
    }, [])

    return (
        <div className="h-auto w-screen ">
            <h4 className="text-4xl font-semibold text-center py-8"><span className="text-primary">Featured</span> Jobs.</h4>
            <div className="container mx-auto pb-8">
                <div className="grid grid-cols-2 gap-4">
                    {featuredjobs.map((job) => (
                        <JobCard job={job}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs
