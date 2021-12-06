import { SIGNIN,SIGNUP,LOGOUT, APPLYJOBS} from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
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
        default:
            return state
    }
}