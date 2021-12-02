import { COMPANYDETAIL ,ALLCOMPANIES} from '../constants/actionTypes'
import * as api from '../api/index'

export const getAllCompanies = () => async (dispatch) => {
    try {
        const {data} = await api.getAllCompanies()
        dispatch({type:ALLCOMPANIES,data})    
    } catch (error) {
        console.log(error);
        alert('There is an error in comp')
    }
}
export const getCompanyDetails = (id) => async (dispatch) => {
    try {
        const {data} = await api.getCompanyDetails(id)
        console.log(data);
        dispatch({type:COMPANYDETAIL,data})    
    } catch (error) {
        console.log(error);
        alert('There is an error in como')
    }
}

