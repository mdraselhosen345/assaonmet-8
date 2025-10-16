import React from 'react';
import logoPng from '../../assets/logo.png'
const Navber = () => {
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl"><span><img src={logoPng} className='w-[25px] h-[25px]' alt="" /></span>HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='hover:bg-[#632EE3] opacity-70 hover:underline'>Home</a></li>
      <li><a className='hover:bg-[#632EE3] opacity-70 hover:underline'>Apps</a></li>     
      <li><a className='hover:bg-[#632EE3] opacity-70 hover:underline'>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#632EE3]">Contribute</a>
  </div>
</div>
    );
};

export default Navber;