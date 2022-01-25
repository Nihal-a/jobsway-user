import {SIGNIN,SIGNUP} from '../constants/actionTypes'
import * as api from '../api/index'



export const signup = (formData , history, setLoading) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        history.push('/verifyotp' , {Allow : true , formData : formData})
        setLoading(false)
    } catch (error) {
        setLoading(false)
        const status = Array.isArray(error.response.data.errors)
        const errors = error.response.data.errors
        history.push('/signup', {Err: errors , status : status})
    }
}

export const signin = (formData,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.signin(formData)
        dispatch({type:SIGNIN,data})
        history.push('/')
        setLoading(false)
    } catch (error) {
        setLoading(false)
        var errors =  error.response.data.errors
        console.log(errors);
        history.push('/signin', {Err: errors})
    }
}

export const verifyotp = (otpDetails,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.verifyotp(otpDetails)
        dispatch({type:SIGNIN,data})
        history.push('/')
        setLoading(false)
    } catch (error) {
        history.push('/verifyotp', {Allow : true ,Err: error.response.data.Err,formData:error.response.data.userDetails})  
        setLoading(false)
    }
}
export const googlesign = (userDetails,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.googlesign(userDetails)
        dispatch({type:SIGNIN,data})
        history.push('/')
        setLoading(false)
    } catch (error) {
        console.log({err:error.message});
    }
}

export const forgotPassword = (formData,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.forgotPassword(formData)
        history.push('/forgot-otp-verify' , { phone : data.phone})
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log({err:error.message});
    }
}

export const verifyForgotOtp = (formData,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.ForgotverifyOtp(formData)
        dispatch({type:SIGNIN,data})
        setLoading(false)
        history.push('/')
    } catch (error) {
        setLoading(false)
        history.push('/forgot-otp-verify', {Allow : true ,Err: error.response.data.Err,phone:error.response.data.phone})  
    }
}
