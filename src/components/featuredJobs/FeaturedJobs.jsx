import React from 'react'
import JobCard from '../JobCard/JobCard';

function FeaturedJobs() {
    const num = 0;
    return (
        <div className="h-auto w-screen ">
            <h4 className="text-4xl font-semibold text-center py-8"><span className="text-primary">Featured</span> Jobs.</h4>
            <div className="container mx-auto pb-8">
                <div className="grid grid-cols-2 gap-4">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs
