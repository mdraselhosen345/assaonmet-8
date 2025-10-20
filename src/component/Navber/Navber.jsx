import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/logo.png'
const Navber = () => {
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
       <img src={logoPng} className="w-[25px] h-[25px]" alt="Logo" />
       HERO.IO
   </Link>

  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1">
       <li> <Link to="/" className="hover:bg-[#632EE3] opacity-70 hover:underline">Home</Link></li>
       <li><Link to="Card" className="hover:bg-[#632EE3] opacity-70 hover:underline">Apps</Link></li>
       <li><Link to="Instaillation" className="hover:bg-[#632EE3] opacity-70 hover:underline">Installation</Link></li>
   </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#632EE3]">Contribute</a>
  </div>
</div>
    );
};

export default Navber;