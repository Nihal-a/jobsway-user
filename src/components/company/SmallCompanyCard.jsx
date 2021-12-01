import React from 'react'
import googleLogo from '../../assets/images/googleLogo.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const SmallCompanyCard = () => {
    return (
        <Link to="/company-details" className="w-44 h-56 bg-secondary rounded-md my-3 flex items-center justify-center flex-col p-3 cursor-pointer">
            <img src={googleLogo} alt="" className="h-20 w-20 rounded-md"/>
            <h6 className="mt-2 font-semibold text-xl">Google</h6>
            <div className="flex items-center justify-center mt-2">
            <Icon icon="akar-icons:location" />
            <p className="text-sm">Benguluru , India</p>
            </div>
            <p className="mt-2 text-xs">(22 Jobs Available)</p>
        </Link>
    )
}

export default SmallCompanyCard
