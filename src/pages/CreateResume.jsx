import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/ResumeComponenets/Education';
import Experience from '../components/ResumeComponenets/Experience';
import ExtraDetails from '../components/ResumeComponenets/ExtraDetails';
import Indroduction from '../components/ResumeComponenets/Indroduction';
import Profile from '../components/ResumeComponenets/Profile';
import ProjectDetails from '../components/ResumeComponenets/ProjectDetails';

const initialState = {
            jobTitle : '',
            imgUrl :  '' ,
            fullName : '' ,
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

            language1: '' ,
            language2: '' ,
            language3: '' ,
            interest1: '' ,
            interest2: '' ,
            interest3: '' ,
}

const CreateResume = () => {
  
  const [step, setStep] = useState(0);
  const [formData, setFormdata] = useState(initialState);



  const nextStep = (e) => {
    setStep((step) => step + 1)
  }
  
  const prevStep = (e) => {
    setStep((step) => step - 1)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormdata({...formData ,[e.target.name] : e.target.value})
  }

  // console.log(formData);

  const stepComponent = () => {
    switch (step) {
      case 0:
        return  <Indroduction nextStep={nextStep} prevStep={prevStep} />
      case 1:
        return <Profile handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} formData={formData} setFormdata={setFormdata}/>
      case 2:
        return <Experience nextStep={nextStep} prevStep={prevStep}/>
        case 3:
          return <ProjectDetails nextStep={nextStep} prevStep={prevStep}/>
          case 4:
          return <Education nextStep={nextStep} prevStep={prevStep}/>
          case 5:
          return <ExtraDetails nextStep={nextStep} prevStep={prevStep}/>
      default:
        break;
    }
  }

 
  return (
      <div className="">
        <div className="md:container md:mx-auto flex justify-between items-center mt-5 ">
        <Link to="/" className="text-3xl font-bold" >Jobs<span className="text-primary">Way.</span></Link>
      </div>
      <div className="text-center mt-14">
        <h3 className='font-semibold text-xl'>{!step == 0 && 'Step - '} <span className='text-primary'>{step == 0 ? 'Introduction' : `${step}` }</span></h3>
      </div>
      <div className="container mx-auto flex mt-2 justify-center  w-screen mb-10">
        {
          stepComponent()
        }
      </div>
      </div>
    )
};

export default CreateResume;

