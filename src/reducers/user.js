import { AUTH } from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
    switch (action.type) {
        case AUTH:
            console.log("Data === ",action.data);
            // localStorage.setItem('profile',JSON.stringify({...action?.data}))
            // return {...state,authData:action?.data}
        case 'CREATE__USER':
            return state
        default:
            return state
    }
}