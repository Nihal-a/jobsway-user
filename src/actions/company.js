import { COMPANYDETAIL } from '../constants/actionTypes'
import * as api from '../api/index'

export const getCompanyDetails = (id) => async (dispatch) => {
    try {
        const {data} = await api.getCompanyDetails(id)
        dispatch({type:COMPANYDETAIL,data})    
    } catch (error) {
        console.log(error);
        alert('There is an error in como')
    }
}

