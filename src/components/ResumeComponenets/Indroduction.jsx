import React from 'react';
import ResumeImage from '../../assets/images/undrawResume.svg'
import { Button } from '@material-tailwind/react';

const Indroduction = ({nextStep}) => {
  return(
       <div className='text-center flex flex-col items-center'>
           <h3 className='text-xl mt-2'>Welcome to <span className='text-primary'>JobsWay Resume Builder</span> </h3>
           <img src={ResumeImage} alt="" className='mt-6 w-72'/>
           <p className='mt-8 text-lg'>A Simple 5 Step Proccess to Create your JobsWay Resume</p>
            <Button className="mt-5" onClick={nextStep} >Get Started</Button>
        </div>
  )
};

export default Indroduction;
