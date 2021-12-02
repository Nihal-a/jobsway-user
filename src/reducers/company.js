import {  ALLCOMPANIES, COMPANYDETAIL} from "../constants/actionTypes"

export default  (companise = {},action) => {
    switch (action.type) {
        case ALLCOMPANIES:
            return {...companise , allCompanies : action.data}
        case COMPANYDETAIL:
            return {...companise , company : action.data}
        default:
            return companise
    }
}