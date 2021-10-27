import React from 'react'
import { Link } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'
import { Icon } from '@iconify/react';

function JobCard() {
    return (
        <div className="w-full h-62 rounded-md p-4" style={{ backgroundColor: '#2c2c2c' }}>
            <div className="flex justify-between">
                <Link className="flex items-center">
                    <img src={googleLogo} alt="company logo" className="w-14 h-14 rounded-md" />
                    <div className="ml-3">
                    <h6 className=" text-2xl font-semibold text-white">Google</h6>
                    <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">Bengluru,India</p>
                    </div>
                    </div>
                </Link>
                <div className="text-white">10 days ago</div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white mt-3">Sr.Web Devoloper</h2>
                <div className="flex items-center">
                    <span className="flex items-center mt-2">
                        <Icon icon="bx:bx-rupee" height="34" color="#00B512" />
                        <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>30000 - 50000</h6>
                    </span>
                    <h5 className="text-white font-light mt-2 ml-5">Full time</h5>
                </div>
            </div>
            <div className="flex justify-between mt-2 ml-2">
                <p className="text-white">4 - 8 year of Experience</p>
                <Link className="bg-white text-primary py-2 px-4 rounded-md font-semibold">Know More</Link>
            </div>
        </div>
    )
}

export default JobCard
