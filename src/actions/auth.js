import {SIGNIN,SIGNUP} from '../constants/actionTypes'
import * as api from '../api/index'



export const signup = (formData , history, setLoading) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        setLoading(false)
        history.push('/verifyotp' , {Allow : true , formData : formData})
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
        setLoading(false)
        history.push('/')
    } catch (error) {
        setLoading(false)
        var errors =  error.response.data.errors
        console.log(errors);
        history.push('/signin', {Err: errors})
    }
}

export const verifyotp = (otpDetails,history) => async (dispatch) => {
    try {
        const {data} = await api.verifyotp(otpDetails)
        dispatch({type:SIGNIN,data})
        history.push('/')
    } catch (error) {
        
        history.push('/verifyotp', {Allow : true ,Err: error.response.data.Err,formData:error.response.data.userDetails})  
    }
}
export const googlesign = (userDetails,history) => async (dispatch) => {
    try {
        const {data} = await api.googlesign(userDetails)
        dispatch({type:SIGNIN,data})
        history.push('/')
    } catch (error) {
        console.log({err:error.message});
    }
}

export const forgotPassword = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.forgotPassword(formData)
        history.push('/forgot-otp-verify' , { phone : data.phone})
    } catch (error) {
        console.log({err:error.message});
    }
}

export const verifyForgotOtp = (formData,history,setLoading) => async (dispatch) => {
    try {
        const {data} = await api.ForgotverifyOtp(formData)
        setLoading(false)
        dispatch({type:SIGNIN,data})
        history.push('/')
    } catch (error) {
        setLoading(false)
        console.log({err:error.message});
    }
}
