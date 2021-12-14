import {SIGNIN,SIGNUP} from '../constants/actionTypes'
import * as api from '../api/index'



export const signup = (formData , history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        history.push('/verifyotp' , {Allow : true , formData : formData})
    } catch (error) {
        const status = Array.isArray(error.response.data.errors)
        const errors = error.response.data.errors
        history.push('/signup', {Err: errors , status : status})
    }
}
// export const signup = (formData,history) => async (dispatch) => {
//     try {
//         const {data} = await api.signup(formData)
//         if(data.status == 'send'){
//             history.push('/verifyotp',{Allow : true ,formData :formData})
//         }else{
//             history.push('/signup', {Err: 'User already Exists , Try Login !'})
//         }
//     } catch (error) {
//          console.log({error:error.message});
//     }
// }

// export const signup = (formData,history) => async (dispatch) => {
//     try {
//         const {data} = await api.signup(formData)
//         console.log("data" ,data);
//             // dispatch({type:SIGNUP,data})
//             // history.push('/')
//     } catch (error) {
//         if(error.response.data.errors ){
//             var errors =  error.response.data.errors 
//             history.push('/signup', {Err: errors})
//         }el
//         var Error = error.response.data
//         console.log(errors);

//     }
// }
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


