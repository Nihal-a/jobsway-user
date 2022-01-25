// import React, { Children } from 'react';
// import Navbar from '../components/navbar/Navbar';
// // import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { useTimer } from 'react-timer-hook';

// const TaskPage = () => {
//   return <div>
//       <Navbar />
//       <div className="container mx-auto max-w-screen-lg mt-28 flex items-center">
//           <div className="">
//               <ol className='list-decimal max-w-2xl'>
//                   <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
//                   <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
//                   <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
//                   <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellat atque, maiores non aliquid magni?</li>
//               </ol>
//           </div>
//           <div className="">
              
//           </div>
//       </div>
//       <div className="">
//           <input type="url" name='submit' className='appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'/>
//       </div>
//   </div>;
// };

// export default TaskPage;

import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}