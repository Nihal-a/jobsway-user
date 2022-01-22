import { ALLAPPLIEDJOBS, ALLJOBS, APPLYJOBS, COMPANYJOBS, FEATUREDJOBS, JOBDETAILS } from '../constants/actionTypes'
import * as api from '../api/index'
import toast from 'react-hot-toast'

export const getFeaturedJobs = () => async (dispatch) => {
    try {
        const {data} = await api.getFeaturedJobs()
        dispatch({type:FEATUREDJOBS,data})    
    } catch (error) {
        console.log(error.response);
        alert('There is an error in getFeaturedJobs')
    }
}

export const getAllJobs = (setLoading) => async (dispatch) => {
    try {
        const {data} = await api.getAllJobs()
        dispatch({type:ALLJOBS,data})    
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error.response);
        alert('There is an error in getAllJobs')
    }
}

export const getCompanyJobs = (id) => async (dispatch) => {
    try {
        const {data} = await api.getCompanyJobs(id)
        dispatch({type:COMPANYJOBS,data})    
    } catch (error) {
        console.log(error.response);
        alert('There is an error in getCompanyJobs')
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

export const getJobDetailsById = (jobId , setLoading , setStatus , user) => async (dispatch) => {
    try {
        const {data} =await api.getJobDetailsById(jobId)
        dispatch({type:JOBDETAILS,data})       
        if(data?.applications.length != 0){
            data?.applications.map((application) => {
                if(application.userId == user.user._id) {
                    setStatus(true)
                }   
            })
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        var errors = error.response
        console.log(errors);
    }
}


