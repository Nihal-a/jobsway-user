import React from 'react'
import { Link } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'
import { Icon } from '@iconify/react';

function JobCard() {
    return (
        <Link className="w-full h-52 rounded-md p-4" style={{ backgroundColor: '#2c2c2c' }}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={googleLogo} alt="company logo" className="w-14 h-14 rounded-md" />
                    <div className="ml-3">
                    <h6 className=" text-2xl font-semibold text-white">Google</h6>
                    <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">Bengluru,India</p>
                    </div>
                    </div>
                </div>
                <div className="text-white">10 days ago</div>
            </div>
        </Link>
    )
}

export default JobCard
