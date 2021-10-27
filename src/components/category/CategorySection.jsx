import React from 'react'
import { Link } from 'react-router-dom'
function CategorySection() {
    return (
        <div className="w-screen container mx-auto flex flex-col">
            <h4 className="text-4xl font-semibold text-center">Explore By <span className="text-primary">Category.</span></h4>
            <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
                <div className="bg-secondary h-auto rounded-md">
                    <div className="rounded-md h-full flex flex-col p-4 justify-center cursor-pointer shadow-sm hover:bg-primary transition duration-150 hover:text-white">
                    <h6 className="text-4xl text-black leading-snug font-semibold" style={{maxWidth:'90%'}}>Design & Devolopment </h6>
                    <p className="text-dark text-center my-2">(109 Jobs)</p>
                    </div>
                </div>
            </div>
                <Link className="underline text-center w-full my-4">Explore more.</Link>
        </div>
    )
}

export default CategorySection
