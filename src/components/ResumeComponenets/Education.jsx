import { Button } from '@material-tailwind/react';
import React from 'react';

const Education = ({nextStep , prevStep}) => {
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
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Form Year
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   To Year
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
</div>
<div className="w-full flex">
<div className="md:w-1/3 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Qualification
   </label>
   <input className="appearance-none block md:w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="md:w-2/3 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Experience
   </label>
   <input className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
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
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="datepicker form-floating relative w-full md:w-1/2 px-3">
   <label className="block uppercase form-control tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Form Year
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   To Year
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="" />
</div>
</div>
<div className="w-full flex">
<div className="md:w-1/3 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Qualification
   </label>
   <input className="appearance-none block md:w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="md:w-2/3 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Experience
   </label>
   <input className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
</div>
</div>
</div>
<hr />
<div className="flex items-center justify-center font-light">
<Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
<Button className="m-2" onClick={nextStep}  >Next</Button>
</div>
</div>
</div>
</div>
};

export default Education;
