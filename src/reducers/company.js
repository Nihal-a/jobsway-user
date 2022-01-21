import {  ALLCOMPANIES, COMPANYDETAIL, COMPANYJOBS} from "../constants/actionTypes"

export default  (companise = { companyJobs : [] , company : {} , allCompanies : []},action) => {
    switch (action.type) {
        case ALLCOMPANIES:
            return {...companise , allCompanies : action.data}
        case COMPANYDETAIL:
            return {...companise , company : action.data}
        case COMPANYJOBS :
            return {...companise , companyJobs : action.data}
        default:
            return companise
    }
}