import { ALLJOBS, COMPANYJOBS, FEATUREDJOBS } from '../constants/actionTypes'
import * as api from '../api/index'

export const getFeaturedJobs = () => async (dispatch) => {
    try {
        const {data} = await api.getFeaturedJobs()
        dispatch({type:FEATUREDJOBS,data})    
    } catch (error) {
        alert('There is an error')
    }
}

export const getAllJobs = () => async (dispatch) => {
    try {
        const {data} = await api.getAllJobs()
        dispatch({type:ALLJOBS,data})    
    } catch (error) {
        alert('There is an error')
    }
}

export const getCompanyJobs = () => async (dispatch) => {
    try {
        const {data} = await api.getCompanyJobs()
        dispatch({type:COMPANYJOBS,data})    
    } catch (error) {
        alert('There is an error')
    }
}
