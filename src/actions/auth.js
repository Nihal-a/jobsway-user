import {SIGNIN,SIGNUP} from '../constants/actionTypes'
import * as api from '../api/index'

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        if(data.user){
            dispatch({type:SIGNUP,data})
            history.push('/')
        }else{
            history.push('/signup', {Err: 'User already exists.'})
        }
        
    } catch (error) {
         console.log({error:error.message});
    }
}
export const signin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signin(formData)
        if(data.user){
            dispatch({type:SIGNIN,data})
            history.push('/')
        }else{
            history.push('/signin', {Err: 'Invalid Email or Password.'})
        }
        
    } catch (error) {
         console.log({error:error.message});
    }
}
export const sendotp = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.sendotp(formData)
        if(data.status == 'send'){
            history.push('/verifyotp',{Allow : true ,formData :formData})
        }else{
            history.push('/signup', {Err: 'User already Exists , Try Login !'})
        }
    } catch (error) {
         console.log({error:error.message});
    }
}
export const verifyotp = (otpDetails,history) => async (dispatch) => {
    try {
        const {data} = await api.verifyotp(otpDetails)
        console.log("DAta",data);
        if(data.Err){
            history.push('/verifyotp', {Allow : true ,Err: 'Invalid Otp',formData:data.user})
            
        }else{
            console.log("error verify otp");
            dispatch({type:SIGNIN,data})
            history.push('/')
        }
    } catch (error) {
         console.log({error:error.message});
    }
}

