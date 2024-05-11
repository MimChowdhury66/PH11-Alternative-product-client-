import React from 'react';
import logo from '../../../public/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-blue-100 text-gray-800 mt-5">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-default-600">
                            <img className='w-[50px]' src={logo} alt="" /><a className="lg:text-2xl font-bold text-blue-400"> </a>
                        </div>
                        <span className="self-center text-2xl font-semibold">InformaTica</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-900">Product</h3>
                        <ul className="space-y-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/quries">Queries</NavLink></li>
                        <li><NavLink to="/recommendations">Recommendations
                            For Me</NavLink></li>
                        <li><NavLink to="/myQueries">My Queries</NavLink></li>
                        <li><NavLink to="/myRecommendations">My recommendations</NavLink></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-900">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/rajkonna.m2m?mibextid=ZbWKwL" title="Facebook" className="flex items-center p-1 text-2xl ">
                                <FaFacebook />
                            </a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mim-chowdhury-304384196/" title="Twitter" className="flex items-center p-1 text-2xl ">
                                <FaLinkedin />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-600">© 2024 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;