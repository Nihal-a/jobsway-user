import {  ALLAPPLIEDJOBS, ALLJOBS, APPLYJOBS, COMPANYJOBS, FEATUREDJOBS} from "../constants/actionTypes"

export default  (job = [],action) => {
    switch (action.type) {
        case FEATUREDJOBS:
            return action.data
        case ALLJOBS:
            return action.data
        case COMPANYJOBS:
            return action.data
        case APPLYJOBS:
            return job.map((jobs) => jobs._id == action.data.job._id ? action.data.job : job)
        case ALLAPPLIEDJOBS:
            const appliedJobs = action.data
            return job.push(appliedJobs)
        default:
            return job
    }
}