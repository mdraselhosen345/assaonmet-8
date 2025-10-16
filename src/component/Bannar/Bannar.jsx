import React from 'react';

const Bannar = () => {
    return (
        <div className='text-center mx-auto max-w-[1150px] mt-[40px] '>
             <h1 className='text-6xl font-bold text-[#ddebf7]'>We Build</h1>
             <br/>
             <h1 className='text-6xl font-bold text-[#ddebf7]'><span className='text-[#632EE3]'>Productive </span>Apps</h1>
             <p className='text-xl mt-[12px] text-[#627382] mb-[15px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
             <div className=' flex justify-center gap-8'>
                <a className='text-xl font-semibold text-[#98c8f3] ' href="https://play.google.com/store/games?hl=en" target='_blank'>Google Play</a> 
                <a className='text-xl font-semibold text-[#98c8f3] ' href="https://www.apple.com/app-store/" target='_blank'>App Store</a>
             </div>

        </div>
    );
};

export default Bannar;