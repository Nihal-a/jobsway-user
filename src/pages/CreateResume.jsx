import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/ResumeComponenets/Education';
import Indroduction from '../components/ResumeComponenets/Indroduction';
import Profile from '../components/ResumeComponenets/Profile';
import ProjectDetails from '../components/ResumeComponenets/ProjectDetails';

const initialState = {
            jobTitle : '',
            imgUrl :  '' ,
            firstname : '' ,
            lastname: '',
            email: '' ,
            phone: '' ,
            github: '' ,
            linkedin: '' ,
            facebook: '' ,
            instagram: '' ,
        
            college: '' ,
            fromyear1: '' ,
            toyear1: '' ,
            qualification1: '' ,
            description1: '' ,
            school: '' ,
            fromyear2: '' ,
            toyear2: '' ,
            qualification2: '' ,
            description2: '' ,
        
            title1: '' ,
            link1: '' ,
            projectDescription1: '' ,
            title2:'' ,
            link2: '' ,
            projectDescription2: '' ,
            title3: '' ,
            link3: '' ,
            projectDescription3: '' ,
        
            institute1: '' ,
            position1: '' ,
            duration1: '' ,
            experienceDescription1: '' ,
            institute2: '' ,
            position2: '' ,
            duration2: '' ,
            experienceDescription2: '' ,
        
            skill1: '' ,
            skill2: '' ,
            skill3: '' ,
            skill4: '' ,
            skill5: '' ,
            skill6: '' ,

            interest1: '' ,
            interest2: '' ,
            interest3: '' ,
            interest4: '' ,
            interest5: '' ,
            interest6: '' ,
}

const CreateResume = () => {
  
  const [step, setStep] = useState(0);


  const nextStep = (e) => {
    console.log(step);
    setStep((step) => step + 1)
    console.log(step);
  }
  
  const prevStep = (e) => {
    console.log(step);
    setStep((step) => step - 1)
    console.log(step);
  }


  const stepComponent = () => {
    switch (step) {
      case 0:
        return  <Indroduction nextStep={nextStep} prevStep={prevStep}/>
      case 1:
        return <Profile nextStep={nextStep} prevStep={prevStep}/>
      case 2:
        return <Education nextStep={nextStep} prevStep={prevStep}/>
      case 3:
        return <ProjectDetails nextStep={nextStep} prevStep={prevStep}/>
      default:
        break;
    }
  }

 
  return (
      <div className="">
          <div className=''>
        <div className="md:container md:mx-auto flex justify-between items-center mt-5 ">
        <Link to="/" className="text-3xl font-bold" >Jobs<span className="text-primary">Way.</span></Link>
      </div>
      <div className="text-center mt-14">
        <h3 className='font-semibold text-xl'>{!step == 0 && 'Step - '} <span className='text-primary'>{step == 0 ? 'Introduction' : `${step}` }</span></h3>
      </div>
      <div className="container mx-auto flex mt-2 justify-center  w-screen ">
        {
          stepComponent()
        }
      </div>
      </div>
      </div>
    )
};

export default CreateResume;



// <form className="w-full max-w-4xl flex flex-col">
// <div className="flex flex-wrap -mx-3 mb-6">
//   <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-first-name">
//       First Name
//     </label>
//     <input className="appearance-none block w-full bg-secondary text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
//     {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
//   </div>
//   <div className="w-full md:w-1/2 px-3">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-last-name">
//       Last Name
//     </label>
//     <input className="appearance-none block w-full bg-secondary text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
//   </div>
// </div>
// <div className="flex flex-wrap -mx-3 mb-6">
//   <div className="w-full px-3">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-password">
//       Job title
//     </label>
//     <input className="appearance-none block w-full bg-secondary text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" />
//     {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
//   </div>
// </div>
// <div className="flex flex-wrap -mx-3 mb-2">
//   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-city">
//       City
//     </label>
//     <input className="appearance-none block w-full bg-secondary text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
//   </div>
//   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-state">
//       State
//     </label>
//     <div className="relative">
//       <select className="block appearance-none w-full bg-secondary border  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//         <option>New Mexico</option>
//         <option>Missouri</option>
//         <option>Texas</option>
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
//       </div>
//     </div>
//   </div>
//   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="grid-zip">
//       Zip
//     </label>
//     <input className="appearance-none block w-full bg-secondary text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={90210} />
//   </div>
// </div>
// </form>