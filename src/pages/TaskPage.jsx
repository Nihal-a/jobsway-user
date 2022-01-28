import { Button, InputIcon } from '@material-tailwind/react';
import React from 'react';
import AlertComponent from '../components/Alert/Alert';
import Navbar from '../components/navbar/Navbar';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect } from 'react';


const TaskPage = () => {


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
    
      const minutes = Math.floor(remainingTime / 60)
      const seconds = remainingTime % 60
  
  
    return (
      <div className="timer text-center text-2xl">
        <div className="text">Remaining</div>
        <div className="value text-4xl font-semibold text-primary">{`${minutes}:${seconds}`}</div>
        <div className="text">seconds</div>
      </div>
    );
  };


  return <div>
   <Navbar />

<div className="container mx-auto flex flex-col items-center justify-center gap-4">
<div className="container mx-auto max-w-screen-lg mt-28 flex items-center justify-center">
      <div className=" flex flex-col justify-center items-center mt-10">
        <p className='text-danger mb-10'>Warning : <span className='font-semibold'>Dont Quit or Close the tab until you submit the task</span></p>
          <ol className='list-decimal max-w-lg flex flex-col gap-3'>
              <li className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
              <li className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
              <li className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
              <li className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
          </ol>
      </div>
      <div className=" flex flex-col justity-center ">
      <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          size={280}
        >
          {renderTime}

        </CountdownCircleTimer>
      </div>
  </div>
    <form className="w-10/12 flex items-center justify-center gap-4 mt-6">
    <InputIcon
            type="link"
            color="lightBlue"
            size="lg"
            outline={true}
            placeholder="Answer URL"
            iconFamily="material-icons"
            iconName="link"

        />
        <input type="submit" className='px-6 py-2 rounded-md text-white bg-primary pointer'/>
    </form>

</div>

  </div>;
};

export default TaskPage;
