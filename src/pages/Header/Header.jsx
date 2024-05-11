import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/quries">Queries</NavLink></li>
                        <li><NavLink to="/recommendations">Recommendations
                            For Me</NavLink></li>
                        <li><NavLink to="/myQueries">My Queries</NavLink></li>
                        <li><NavLink to="/myRecommendations">My recommendations</NavLink></li>

                    </ul>
                </div>
                <img className='w-[50px]' src={logo} alt="" /><a className="lg:text-2xl font-bold text-blue-400">InformaTica </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Home</NavLink></li>
                    <li><NavLink to="/quries" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'}>Queries</NavLink></li>
                    <li><NavLink to="/recommendations" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'}>Recommendations
                        For Me</NavLink></li>
                    <li><NavLink to="/myQueries" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'}>My Queries</NavLink></li>
                    <li><NavLink to="/myRecommendations" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'}>My recommendations</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">

                <Link to='/login'><button className="btn lg:text-xl text-white  bg-blue-400 ">Log In</button></Link>
            </div>

        </div>
    );
};

export default Header;