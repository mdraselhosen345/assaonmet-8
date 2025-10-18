import React from 'react';
import logoPng from '../../assets/logo.png'
import facebookPng from '../../assets/facebook1.png'
import instramPng from '../../assets/intagram.png'
import wathappPng from '../../assets/whatsapp.gif'


const footer = () => {
    return (
        <div className='h-[180px]'>
           <div className='flex justify-between items-center'>
              <a className=" btn text-xl ml-24"><span><img src={logoPng} className='w-[15px] h-[15px]' alt="" /></span>HERO.IO</a>
              <h3 className='mr-24'>Social Links</h3>
           </div>
           <div>
                <ul className='flex gap-4 justify-end pr-20 pt-8 '>
                    <li><img className='w-[20px] h-[20px]' src={facebookPng} alt="" /></li>
                    <li><img className='w-[20px] h-[20px]' src={instramPng} alt="" /></li>
                    <li><img className='w-[20px] h-[20px] rounded-xl' src={wathappPng} alt="" /></li>
                </ul>
                 <div className='border-1 border-[#999494] ml-[60px] mr-[60px]'></div> 
           </div>
           <div className='text-center mt-7 text-[#999494]'>
            <h3>Copyright © 2025 - All right reserved</h3>
           </div>
        </div>
    );
};

export default footer;