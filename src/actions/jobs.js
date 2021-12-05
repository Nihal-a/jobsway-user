import { ALLJOBS, APPLYJOBS, COMPANYJOBS, FEATUREDJOBS } from '../constants/actionTypes'
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

export const applyForJob = (dataObj, jobDetails , history) => async (dispatch) => {
    try {
        const {data} = await api.applyForJob(dataObj)
        dispatch({type:APPLYJOBS,data})    
        history.push('/findjob')
    } catch (error) {
        var errors = error.response.data.errors
        history.push('/apply-job',{job : jobDetails, Err: errors})
    }
}
