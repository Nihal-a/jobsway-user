import { ALLJOBS, ALLUSERS } from '../constants/actionTypes'
import * as api from '../api/index'
import toast from 'react-hot-toast'

export const GetUserDetails = (id , setLoading) => async (dispatch) => {
    try {
        const {data} = await api.getUserDetails(id)
        dispatch({type:ALLUSERS,data})    
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error.response);
    }
}

export const search = (keyword , setLoading) => async (dispatch) => {
    try {
        const {data} = await api.doSearch(keyword)
        dispatch({type:ALLJOBS,data})    
    } catch (error) {
        console.log(error.response);
    }
}
