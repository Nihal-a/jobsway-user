import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index'

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        console.log("data",data);
        if(data.user){
            dispatch({type:AUTH,data})
            history.push('/')
        }else{
            history.push('/signup', {Err: 'User already exists.'})
        }
        
    } catch (error) {
         console.log({error:error.message});
    }
}

