import { Button, InputIcon } from '@material-tailwind/react';
import React, { useState } from 'react';
import AlertComponent from '../components/Alert/Alert';
import Navbar from '../components/navbar/Navbar';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TaskCompleted } from '../actions/user';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';


const TaskPage = () => {

  const location = useLocation()
  const [taskDetails, setTaskDetails] = useState();
  const [disable, setDisable] = useState(false);
  const [url, setUrl] = useState('');
  const [formData, setformData] = useState({url : ''});
  const dispatch = useDispatch()
  const [loading, setLoading] = useState();
  const history = useHistory()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  useEffect(() => {
   setTaskDetails(location?.state.task)

  }, []);
  

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
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
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const formDetails = {
      answerUrl : formData.url ,
      taskId : taskDetails?._id
    }
    dispatch(TaskCompleted(formDetails , user?.user._id , setLoading , history))
  }

  const timeInMinute = taskDetails?.time * 60

  console.log(timeInMinute);

  const onComplete = () => {
    setDisable(true)
  }

  if(loading){
    return <LoadingSpinner />
  }

  return <div>
   <Navbar />

<div className="container mx-auto flex flex-col items-center justify-center gap-4">
<div className="container mx-auto max-w-screen-lg mt-28 flex items-center justify-center">
      <div className=" flex flex-col justify-center items-center mt-10">
        <p className='text-danger mb-10'>Warning : <span className='font-semibold'>Dont Quit or Close the tab until you submit the task</span></p>
          <ol className='list-decimal max-w-lg flex flex-col gap-3'>
              <li className='font-semibold'>{taskDetails?.taskQuestions.q1}</li>
              <li className='font-semibold'>{taskDetails?.taskQuestions.q2}</li>
              <li className='font-semibold'>{taskDetails?.taskQuestions.q3}</li>
              <li className='font-semibold'>{taskDetails?.taskQuestions.q4}</li>
          </ol>
      </div>
      <div className=" flex flex-col justity-center ">
      <CountdownCircleTimer
          isPlaying
          duration={timeInMinute}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={onComplete}
          size={280}
        >
          {renderTime}

        </CountdownCircleTimer>
      </div>
  </div>
    <form className="w-10/12 flex items-center justify-center gap-4 mt-6" onSubmit={handleSubmit}>
    <InputIcon
            type="link"
            color="lightBlue"
            size="lg"
            outline={true}
            placeholder="Answer URL"
            iconFamily="material-icons"
            iconName="link"
            onChange={(e) => setUrl(e.target.value)}
        />
        <button  type="submit" className={`px-6 py-2 rounded-md  ${disable ? 'bg-secondary cursor-none text-warning' : 'bg-primary cursor-pointer text-white'}`} disabled={disable}>{disable ? 'Expired' : 'Submit'}</button>
    </form>

</div>

  </div>;
};

export default TaskPage;
