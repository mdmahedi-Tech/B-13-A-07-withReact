import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { SiStatuspal } from 'react-icons/si';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a><IoHomeOutline />Home</a></li></NavLink>
         <NavLink to={'/timeline'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a><IoIosTimer />TimeLine</a></li></NavLink>
      <NavLink to={'/status'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a> <SiStatuspal />Status</a></li></NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a><IoHomeOutline />Home</a></li></NavLink>
         <NavLink to={'/timeline'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a><IoIosTimer />TimeLine</a></li></NavLink>
      <NavLink to={'/status'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a> <SiStatuspal />Status</a></li></NavLink>
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;