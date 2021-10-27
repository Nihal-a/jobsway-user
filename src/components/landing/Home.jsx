import React from "react";
import homeImage from '../../assets/images/homeImage.svg'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto flex items-center mt-28">
      <div className="w-1/2  flex flex-col items-center justify-center">
        <div className="">
        <h1 className="text-6xl font-bold mb-4">Get the <span className="text-primary">Right Job</span> <br />You Deserves.</h1>
        <h5 className="text-xl text-dark mt-6 mb-10">Get new opportunity through JobsWay.</h5>
        <Link className="bg-primary py-3 px-6 rounded-md font-light" style={{color:'#fff'}}>Find Jobs for me</Link>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img className="object-contain h-full" src={homeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
