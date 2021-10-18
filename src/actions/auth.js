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
        console.log("--",data);
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

