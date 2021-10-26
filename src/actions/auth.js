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
    console.log("CAlled verify otp");
    try {
        const {data} = await api.verifyotp(otpDetails)
        console.log("this is the data : ",data);
        if(data.user){
            dispatch({type:SIGNIN,data})
            history.push('/')
        }else{
    console.log("error verify otp");

            history.push('/verifyotp', {Allow : true ,Err: 'Invalid Otp'})
        }
    } catch (error) {
    console.log("CAlled verify otp");

         console.log({error:error.message});
    }
}

