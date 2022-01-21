import {  ALLJOBS, APPLYJOBS, FEATUREDJOBS} from "../constants/actionTypes"

export default  (job = [],action) => {
    switch (action.type) {
        case FEATUREDJOBS:
            return action.data
        case ALLJOBS:
            return action.data
        case APPLYJOBS:
            return job.map((jobs) => jobs._id == action.data.job._id ? action.data.job : job)
        default:
            return job
    }
}