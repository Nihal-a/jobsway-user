import { Icon } from '@iconify/react';
import swal from '@sweetalert/with-react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import googleLogo from "../../assets/images/googleLogo.png"



const TaskCard = ({task}) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory()


    console.log(task);
    
    const handleTask = (e , id) => {
        e.preventDefault()
        history.push(`/task/${user?.user._id}/${id}`)
    }

  return <div className="w-72 h-64 bg-black rounded-md p-5">
                        <div className="flex justify-between">
                <Link className="flex items-center">
                    <img src={task?.companyDetails[0]?.imgUrl} alt="company logo" className="w-14 h-14 rounded-md" />
                    <div className="ml-3">
                    <h6 className=" text-md font-semibold text-white">{task?.companyDetails[0]?.companyName}</h6>
                    <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{task?.companyDetails[0]?.location}</p>
                    </div>
                    </div>
                </Link>

            </div>
                <h4 className='text-white text-2xl font-semibold mt-3'>Complete Task.</h4>
                <div className="text-white text-center mt-3">
                    <p>{`Question : 4`}</p>
                    <p>{`Time : ${task?.time} mint`}</p>
                </div>
                <div className="flex items-center justify-center mt-2">
                <Link onClick={(e) => handleTask(e , task?._id)} className='text-white bg-primary p-2 rounded-md'>Start Task</Link>
                </div>
            </div>
};

export default TaskCard;
