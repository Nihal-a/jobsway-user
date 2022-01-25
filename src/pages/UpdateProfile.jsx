import React, { useEffect, useState } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import Navbar from '../components/navbar/Navbar';
import noImage from "../assets/images/noImage.jpg"
import PdfViewer from '../components/pdfVeiwer/PdfViewer';
import rswal from '@sweetalert/with-react';
import { Button } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { SIGNIN } from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';


const UpdateProfile = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [formData, setformData] = useState({});
    const [image, setImage] = useState();
    const [pdf, setPdf] = useState('')
    const [viewpdf, setViewPdf] = useState('')
    const [Skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resumeUrl, setResumeUrl] = useState(false);
    const [mode, setMode] = useState(null);
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const userDetails = useSelector((state) => state.user.userDetails)

    const handleChange = (e) => {
        e.preventDefault()
        setformData({...formData , [e.target.name] : e.target.value})
    }

    useEffect(()=>{
        if(userDetails.resumeUrl){
            setResumeUrl(true)
        }
        if(user?.user.authmode == 'phone'){
          setMode('phone')
        }else{
          setMode('email')
        }
        // userDetails.skills = userDetails.skills.join()
    } , [])
    
    const handlePdfChange = (e) => {
        e.preventDefault()
    
        setPdf(e.target.files[0])
    
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
          setViewPdf(fileReader.result)
        } 
        fileReader.readAsDataURL(e.target.files[0])
      }
    
      const handleSkillChange = (e) => {
        var skill = e.target.value.split(',');
        setSkills(skill)
    }
      const handleViewPdf = (e) => {
        e.preventDefault()
        rswal(
          <PdfViewer pdf={viewpdf}/>
        )
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        formData.skills =  Skills
        setLoading(true);
        var fileData = new FormData()

        fileData.append('name' , formData.name || userDetails.name)
        fileData.append('email' , formData.email || user?.user.email)
        fileData.append('phone' , formData.phone || user?.user.phone)
        fileData.append('designatioin' , formData.designatioin || userDetails.designatioin || null)
        fileData.append('location' , formData.location || userDetails.location || null)
        fileData.append('portfolio' , formData.portfolio || userDetails.portfolio || null)
        fileData.append('github' , formData.github || userDetails.github || null)
        fileData.append('linkedIn' , formData.linkedIn || userDetails.linkedIn || null)
        fileData.append('instagram' , formData.instagram || userDetails.instagram || null)
        fileData.append('twitter' , formData.twitter || userDetails.twitter || null)
        fileData.append('facebook' , formData.facebook || userDetails.facebook || null)
        fileData.append('skills' , formData.skills || userDetails.skills || null)
        fileData.append('image' , image || null)
        fileData.append('pdf' , pdf || null) 

        axios({
            method : "patch" ,
            url : `${process.env.REACT_APP_DEV_BASE_URL}/edit-profile/${user?.user._id}` ,
            data : fileData ,
            headers :  { "Content-Type": "multipart/form-data" },
          }).then(({data}) => {
              dispatch({type:SIGNIN,data})    
              setLoading(false)
            history.push(`/my-profile/${user?.user._id}`)
            toast.success('Profile Updated')
          }).catch((error) => {
            setLoading(false)
            console.log(error.response);
            var errors = error.response.data.msg
            toast.error(errors)
          })
      }

      if(loading){
          return <LoadingSpinner />
      }



      console.log(userDetails);

  return <div>
      <Navbar />
      <div className='w-full mt-28 p-10'>
           <h3 className='text-xl text-center'>Update Profile</h3>
      <div className="bg-secondary p-10 rounded-md w-full mt-3">
      <div className="flex flex-col">
          <div className="bg-white p-5 pb-20 mb-3 flex items-center justify-around">
              {/* Photo upload area */}
          <div className="">
            <div className="w-full h-40 mt-4 flex items-center flex-col mt-24">

              <img src={userDetails.imgUrl ? userDetails.imgUrl : [image ? image :   noImage] } alt="no image" className='w-40 h-40'/>

              <ImageInput setImage={setImage}/>
            </div>
          </div>
          {resumeUrl ? <>
            <div className="flex flex-col ">
                {/* <a className='underline' href={userDetails.resumeUrl} target={'_blank'}>Open Resume</a> */}
                <div className="">
                <PdfViewer pdf={userDetails.resumeUrl} />   
                </div>
                <button onClick={() => setResumeUrl(false)} className='p-2 mt-3 bg-black text-white rounded'>Change Resume</button>
            </div>
          </> : <div className="flex flex-col">
              <label className="ml-3 mt-2 m-1" htmlFor="upload">
              Upload Resume :{" "}
            </label>
            <input
              type="file"
              name="upload"
              id=""
              className="bg-secondary p-4 ml-2 rounded-md"
              accept="application/pdf,application/vnd.ms-excel"
              onChange={handlePdfChange}
            />
            {pdf && <button className="underline mt-1" onClick={handleViewPdf}>View Pdf</button>}
            {userDetails.resumeUrl && <button className="underline mt-3" onClick={() => setResumeUrl(true)}>My Resume</button>}
              </div>}
          </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Full Name 
            </label>
            <input value={userDetails.name} name='name' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Job Title *
            </label>
            <input value={userDetails.designatioin} name='designatioin' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
        </div>
       </div>
       

       
    <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Email *
            </label>
            <input disabled={mode == 'email'} value={mode == 'email' ? user?.user.email : formData.email} name='email' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Phone *
            </label>
            <input disabled={mode == 'phone'} value={mode == 'phone' ? user?.user.phone : formData.phone} name="phone" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" />
        </div>
       </div>

       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Portfolio
            </label>
            <input value={userDetails.portfolio}  name="portfolio" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Github
            </label>
            <input value={userDetails.github}  name="github" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Linked In
            </label>
            <input value={userDetails.linkedIn}  name='linkedIn' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Twitter
            </label>
            <input value={userDetails.twitter}  name="twitter" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>
       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
            Facebook
            </label>
            <input value={userDetails.facebook}  name='facebook' onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Instagram
            </label>
            <input value={userDetails.instagram}  name="instagram" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="" />
        </div>

       </div>
       <div className="w-full flex">
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Location
            </label>
            <input value={userDetails.location}  name="location" onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
            Skills
            </label>
            <input value={userDetails.skills}  name="skills" onChange={handleSkillChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Separated By Coma" />
        </div>

       </div>
       <div className="flex items-center justify-center font-light">
        <Button className="mt-6" onClick={handleSubmit}  >Update Profile</Button> 
       </div>
     </div>
      </div>
  </div>;
  </div>;
};

export default UpdateProfile;


