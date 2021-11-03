import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { LOGOUT } from '../constants/actionTypes';


function BlockedUserPage() {

    const user = useSelector(state => state.user)
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault( )
        dispatch({type : LOGOUT});
        history.push('/');
        setUserDetails(null);
      }

    return (

        <div className="w-screen h-screen flex flex-col items-center justify-center"><h1 className="text-4xl font-semibold">Hello , <span className="text-primary">{user?.authData.user.name}</span></h1>
            <p className="text-center text-xl mt-3 text-dark" style={{ color: 'red' }}>Your account has been bloacked Due to some activities against <br /> JobsWay's Terms & Conditions.</p>
            <Link className="mt-4 underline text-sm text-primary" onClick={logout}>Back to Login</Link>

        </div>

    )
}

export default BlockedUserPage
