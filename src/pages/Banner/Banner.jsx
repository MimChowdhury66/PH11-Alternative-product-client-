import React from 'react';
import bg from '../../../public/banner.jpg';
import 'animate.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div >
            {/* <h1 className='' >We are best known for our public Q&A platform that millions of people visit every month to ask questions, learn, and share technical knowledge.</h1> */}
            <div className="hero min-h-[200px]" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInDown">Informa<span className='text-blue-500'>T</span>ica</h1>
                        <p className="mb-5 font-bold">We’re best known for our public Q&A platform that millions of people visit every month to ask questions, learn, and share information.</p>
                        <Link to='/quries'> <button className="btn bg-blue-400 text-black">All Queries</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;