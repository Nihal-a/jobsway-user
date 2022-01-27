import { ALLJOBS, ALLUSERS, TASKOFUSER } from '../constants/actionTypes'
import * as api from '../api/index'
import toast from 'react-hot-toast'
import swal from '@sweetalert/with-react'
import { Button } from '@material-tailwind/react'

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

export const getTaskOfUser = (id) => async (dispatch) => {
    try {
        const {data} = await api.getTaskOfUser(id)
        console.log("this  : " , data);
        dispatch({type:TASKOFUSER,data})    
    } catch (error) {
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

export const CreateResume = (id , formData , setLoading , history) => async (dispatch) => {
    try {
        const {data} = await api.createResume(id , formData)
        setLoading(false)
        console.log(data);
        swal(
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className='mb-5'>The Resume Has Saved to Your Profile You can Download it by Clicking the Button Below.</h2>
                <a target={'_blank'} href={data.Link} className='text-white m-5 py-4 px-6 bg-primary rouned-md' download>Downlaod Resume</a>
            </div>
        )
        history.push('/')
    } catch (error) {
        setLoading(false)
        toast.success("Failed")
        console.log(error.response);
    }
}


