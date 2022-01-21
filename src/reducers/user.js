import { SIGNIN,SIGNUP,LOGOUT, APPLYJOBS , ALLAPPLIEDJOBS, JOBDETAILS} from "../constants/actionTypes"

export default  (state = {authData : null , appliedJobs : [] , jobDetailsByid : null},action) => {
    switch (action.type) {
        case SIGNUP:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case SIGNIN:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null, loading: false, errors: null };
        case APPLYJOBS : 
            localStorage.setItem('profile',JSON.stringify({...action?.data?.userData}))
            return {...state , authData:action?.data?.userData}
        case ALLAPPLIEDJOBS : 
            return {...state , appliedJobs : action?.data}
        case JOBDETAILS : 
            return {...state ,  jobDetailsByid :action?.data}
        default:
            return state
    }
}