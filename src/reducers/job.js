import {  FEATUREDJOBS} from "../constants/actionTypes"

export default  (job = [],action) => {
    switch (action.type) {
        case FEATUREDJOBS:
            return action.data
        default:
            return job
    }
}