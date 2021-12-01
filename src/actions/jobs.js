import { FEATUREDJOBS } from '../constants/actionTypes'
import * as api from '../api/index'

export const getFeaturedJobs = (history) => async (dispatch) => {
    try {
        const {data} = await api.getFeaturedJobs()
        dispatch({type:FEATUREDJOBS,data})    
    } catch (error) {
        alert('There is an error')
    }
}

