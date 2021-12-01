import {  COMPANYDETAIL} from "../constants/actionTypes"

export default  (companise = [],action) => {
    switch (action.type) {
        case COMPANYDETAIL:
            return action.data
        default:
            return companise
    }
}