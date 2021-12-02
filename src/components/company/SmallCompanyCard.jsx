import React from 'react'
import googleLogo from '../../assets/images/googleLogo.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const SmallCompanyCard = ({company}) => {
    return (
        <Link to="/company-details" className="w-56 h-64 bg-secondary rounded-md m-3 flex items-center justify-center flex-col p-2 text-center cursor-pointer">
            <img src={company.imgUrl} alt="" className="h-20 w-20 rounded-md"/>
            <h6 className="mt-2 font-semibold text-xl">{company.companyName}</h6>
            <div className="flex items-center justify-center mt-2">
            <Icon icon="akar-icons:location" />
            <p className="text-sm">{company.location}</p>
            </div>
            <p className="mt-2 text-xs">(22 Jobs Available)</p>
        </Link>
    )
}

export default SmallCompanyCard
