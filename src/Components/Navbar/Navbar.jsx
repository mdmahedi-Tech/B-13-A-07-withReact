import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm sticky">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      </div>
    <a className="btn btn-ghost text-xl">KeenKeeper</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-4 space-x-4">
      <NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a>Home</a></li></NavLink>
      <NavLink to={'/timeline'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a>TimeLine</a></li></NavLink>
      <NavLink to={'/status'} className={({isActive})=>`font-semibold ${isActive ? 'text-white bg-green-950 rounded-sm':''}`}><li><a>Status</a></li></NavLink>
      
      
       
     
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;