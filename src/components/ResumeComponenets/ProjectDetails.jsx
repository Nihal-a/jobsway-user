import { Button } from '@material-tailwind/react';
import React from 'react';

const ProjectDetails = ({nextStep , prevStep}) => {
  return <div className='w-full'>
  <h3 className='text-xl text-center'>Projects Devoloped</h3>
<div className="bg-secondary p-10 rounded-md w-full mt-3">
<div className="flex flex-col">
<div className="">
<h4 className='m-2'>Project 1 : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Title
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Link
   </label>
   <input rows="2" className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder=""  />
</div>
</div>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Description
   </label>
   <textarea className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
</div>
</div>
<div className="">
<h4 className='m-2'>Project 2 : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Title
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Link
   </label>
   <input rows="2" className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder=""  />
</div>
</div>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Description
   </label>
   <textarea className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
</div>
</div>
<div className="">
<h4 className='m-2'>Project 3 : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Title
   </label>
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
<div className="w-full md:w-1/2 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
   Link
   </label>
   <input rows="2" className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder=""  />
</div>
</div>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
   Description
   </label>
   <textarea className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
   {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
</div>
</div>
</div>




<div className="flex items-center justify-center font-light">
<Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
<Button className="m-2" onClick={nextStep}  >Next</Button>
</div>
</div>
</div>
</div>;
};

export default ProjectDetails;
