import React from 'react'
import { Link } from 'react-router-dom'
import './primary.css'

function PrimaryButton(props) {
    
    return (
        <div>
            <Link className="primary-button" to={props.href}>{props.buttonName}</Link>
        </div>
    )
}

export default PrimaryButton
