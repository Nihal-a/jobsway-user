import { Button } from '@material-tailwind/react';
import swal from '@sweetalert/with-react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CreateResume } from '../../actions/user';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ExtraDetails = ({prevStep , formData , handleChange , setLoading}) => {


   const {id} = useParams()
    const [Err, setErr] = useState({});
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
     setErr({})
    }, [formData]);

    const finalSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      dispatch(CreateResume(id , formData , setLoading , history))
  }


  return <div className='w-full'>
  <h3 className='text-xl text-center'>Extra Information</h3>
<div className="bg-secondary p-10 rounded-md w-full mt-3">
<div className="flex flex-col">
    <div className="">
        <h4 className="m-2">Skills : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input  name='skill1' value={formData.skill1}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Skill 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='skill2' value={formData.skill2}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='skill3' value={formData.skill3}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 3" />
</div>
</div>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input  name='skill4' value={formData.skill4}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Skill 4" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='skill5' value={formData.skill5}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 5" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='skill6' value={formData.skill6}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 6" />
</div>
</div>
</div>
<hr className='my-4'/>
    <div className="">
        <h4 className="m-2">Languages : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input  name='language1' value={formData.language1}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Language 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='language2' value={formData.language2}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Language 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='language3' value={formData.language3}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Language 3" />
</div>
</div>
</div>
<hr className='my-2'/>
    <div className="">
        <h4 className="m-2">Interests : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input  name='interest1' value={formData.interest1}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Interest 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='interest2' value={formData.interest2}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Interest 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input  name='interest3' value={formData.interest3}  onChange={handleChange} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Interest 3" />
</div>
</div>
</div>
<hr />
    
<div className="flex items-center justify-center font-light">
<Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
<Button className="m-2" onClick={finalSubmit}  >Create My JobsWay Resume</Button>
</div>
</div>
</div>
</div>
};

export default ExtraDetails;
