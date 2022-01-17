import { ALLAPPLIEDJOBS, ALLJOBS, APPLYJOBS, COMPANYJOBS, FEATUREDJOBS, JOBDETAILS } from '../constants/actionTypes'
import * as api from '../api/index'
import toast from 'react-hot-toast'

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

export const applyForJob = (dataObj, jobDetails , history , setLoading) => async (dispatch) => {
    try {
        const {data} = await api.applyForJob(dataObj , jobDetails._id)
        setLoading(false)
        dispatch({type:APPLYJOBS,data})    
        history.push('/my-jobs')
        toast.success('Applied Job Successfully')
    } catch (error) {
        setLoading(false)
        var errors = error.response.data.errors
        history.push('/apply-job',{job : jobDetails, Err: errors})
    }
}

export const getUserAppliedJobs = (id) => async (dispatch) => {
    try {
        const {data} = await api.getUserAppliedJobs(id)
        dispatch({type:ALLAPPLIEDJOBS,data})            
    } catch (error) {
        var errors = error.response.data.errors
        console.log(error);
    }
}

export const getJobDetailsById = (jobId) => async (dispatch) => {
    try {
        const {data} =await api.getJobDetailsById(jobId)
        dispatch({type:JOBDETAILS,data})            
    } catch (error) {
        var errors = error.response
        console.log(errors);
    }
}


