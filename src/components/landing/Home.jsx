import React from 'react'
import Navbar from '../navbar/Navbar'
import { Icon } from '@iconify/react';
import './Home.css'
import PrimaryButton from '../Buttons/primary/PrimaryButton';


function Home() {
    return (
        <div className="hero-area">
            <div className="home-content">
                <h2 className="hero-txt">Get the <span className="span-clr">Right Job</span> <br /> You Deserve</h2>
                <h6 className="hero-sub">Get new opportunity through JobsWay.</h6>
                <div className="d-flex i-area">
                    <input className="heroInput" type="text" placeholder="Search for Job,Companies,categories"/>
                    <div className="search-icon"><Icon className="s-icon" icon="akar-icons:search" /></div>
                </div>
            </div>
            <div className="img-area"></div>
        </div>
    )
}

export default Home;
