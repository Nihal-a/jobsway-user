import { Button } from '@material-tailwind/react';
import React from 'react';

const ExtraDetails = ({prevStep , nextStep}) => {
  return <div className='w-full'>
  <h3 className='text-xl text-center'>Extra Information</h3>
<div className="bg-secondary p-10 rounded-md w-full mt-3">
<div className="flex flex-col">
    <div className="">
        <h4 className="m-2">Skills : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Skill 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Skill 3" />
</div>
</div>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Skill 4" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Skill 5" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Skill 6" />
</div>
</div>
</div>
<hr className='my-4'/>
    <div className="">
        <h4 className="m-2">Languages : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Language 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Language 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Language 3" />
</div>
</div>
</div>
<hr className='my-2'/>
    <div className="">
        <h4 className="m-2">Interests : </h4>
<div className="w-full flex">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Interest 1" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Interest 2" />
</div>
<div className="w-full md:w-1/2 px-3">
   <input className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Interest 3" />
</div>
</div>
</div>
<hr />
    
<div className="flex items-center justify-center font-light">
<Button color="gray" className="m-2" onClick={prevStep} >Prev</Button>
<Button className="m-2" onClick={nextStep}  >Create My JobsWay Resume</Button>
</div>
</div>
</div>
</div>
};

export default ExtraDetails;
