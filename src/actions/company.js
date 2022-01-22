import { COMPANYDETAIL ,ALLCOMPANIES} from '../constants/actionTypes'
import * as api from '../api/index'

export const getAllCompanies = (setLoading) => async (dispatch) => {
    try {
        const {data} = await api.getAllCompanies()
        dispatch({type:ALLCOMPANIES,data})    
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error);
        alert('There is an error in company')
    }
}
export const getCompanyDetails = (id) => async (dispatch) => {
    try {
        const {data} = await api.getCompanyDetails(id)
        console.log("this data" , data);
        dispatch({type:COMPANYDETAIL,data})    
    } catch (error) {
        console.log(error.response);
        alert('There is an error in comoooooo')
    }
}

