import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const Education = ({nextStep , prevStep , handleChange , formData}) => {

   const [Err, setErr] = useState({});

   useEffect(() => {
    setErr({})
   }, [formData]);



const handleNext = (e) => {
   e.preventDefault()
   if(formData.fromyear1 > formData.toyear1) return setErr({ toyear1 : 'Enter the corect date.' })
   if(formData.fromyear2 > formData.toyear2) return setErr({ toyear2 : 'Enter the corect date.' })
   nextStep()
}

  return <div className='w-full'>
  <h3 className='text-xl text-center'>Education Information</h3>
<div className="bg-secondary p-10 rounded-md w-full mt-3">
<div className="flex flex-col">
    <div className="">
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Collage/Univarsity
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='college' value={formData.college} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Form Year
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='fromyear1' value={formData.fromyear1} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   To Year
   </label>
  { Err.toyear1 && <p className="text-red-500 text-xs italic">{Err.toyear1}</p>}
   <input onChange={handleChange} name='toyear1' value={formData.toyear1} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
</div>
<div className="w-full flex">
<div className="md:w-1/3 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Qualification
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='qualification1' value={formData.qualification1} className="appearance-none block md:w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="md:w-2/3 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Description
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='description1' value={formData.description1} className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
</div>
</div>
</div>
<hr className='my-4'/>
    <div className="">
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   School
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='school' value={formData.school} className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="datepicker form-floating relative w-full md:w-1/2 px-3">
   <label className="block uppercase form-control tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Form Year
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='fromyear2' value={formData.fromyear2} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   To Year
   </label>
   { Err.toyear2 && <p className="text-red-500 text-xs italic">{Err.toyear2}</p>}
   <input onChange={handleChange} name='toyear2' value={formData.toyear2} className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
</div>
<div className="w-full flex">
<div className="md:w-1/3 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Qualification
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='qualification2' value={formData.qualification2} className="appearance-none block md:w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="md:w-2/3 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Description
   </label>
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
   <input onChange={handleChange} name='description2' value={formData.description2} className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
</div>
</div>
</div>
<hr />
<div className="flex items-center justify-center font-light">
<Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
<Button className="m-2" onClick={handleNext}  >Next</Button>
</div>
</div>
</div>
</div>
};

export default Education;
