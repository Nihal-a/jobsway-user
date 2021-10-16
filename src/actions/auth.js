import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index'

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
         console.log({error:error.message});
    }
}

