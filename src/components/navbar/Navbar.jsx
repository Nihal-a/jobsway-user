import React,{useEffect,useState} from "react";    
import { Link,useHistory,useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Icon } from '@iconify/react';
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import './navbar.css'

function Navbar({ hide }) {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const token  = user?.token;

    if(token){
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  const logout = (e) => {
    e.preventDefault( )
    dispatch({type : LOGOUT});
    
    history.push('/');
    
    setUser(null);
  }

  const AuthButtons = () => {
    return(
      <div className="">
        {!hide ? (
        <div className="">
         <Link to="signin" className="mr-5 text-md">Log In</Link>
         <Link to="signup" className="text-primary text-md">Register Now</Link>
        </div>
      ) : (
        <div />
      )}
      </div>
    )
  }

  const NavItems = () => {
    return (
      <div className="flex items-center">
        <Link className="pr-4 text-black ">Find Jobs</Link>
        <Link className="pr-5 text-black ">Create Resume</Link>
        <Link className="profile-menu flex flex-col items-center">
        <div className="">
        <div className="dropdown inline-block relative z-50">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">{user?.user.name}</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className><a className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg w-40" href="#"><Icon className="mr-3 text-2xl" icon="ant-design:profile-outlined" /><span>Profile</span></a></li>
            <li className><a className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg" href="#"><Icon className="mr-3 text-2xl" icon="akar-icons:heart" /><span>My Jobs</span></a></li>
            <li className onClick={logout}><a className="hover:bg-black-200 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg text-white" href="#" style={{backgroundColor:"#008FAE"}}><Icon className="mr-1 text-2xl" icon="uil:signout" /><span>Sign Out</span></a></li>
          </ul>
        </div>
      </div>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-secondary h-20 flex fixed w-screen top-0 shadow-md">
      <div className="md:container md:mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold" >Jobs<span className="text-primary">Way.</span></Link>
        {user ? <NavItems/> : <AuthButtons />}
      </div>
    </div>
  );
}

export default Navbar;

