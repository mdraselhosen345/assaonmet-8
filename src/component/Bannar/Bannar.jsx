import React from 'react';
import palyStor from '../../assets/playstor.png'
import appStor from '../../assets/App stor.png'
import heroPng from '../../assets/hero.png'

const Bannar = () => {
    return (
             <div>
                                    <div className='text-center mx-auto max-w-[1150px] mt-[40px] '>
                                     <h1 className='text-6xl font-bold text-[#ddebf7]'>We Build</h1>
                                     <br/>
                                     <h1 className='text-6xl font-bold text-[#ddebf7]'><span className='text-[#632EE3]'>Productive </span>Apps</h1>
                                     <p className='text-xl mt-[12px] text-[#627382] mb-[15px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                                      <div className=' flex justify-center gap-8'>
                                        <a className='btn text-xl font-semibold text-[#98c8f3] ' href="https://play.google.com/store/games?hl=en" target='_blank'><span><img className='w-[30px] h-[30px]' src={palyStor} alt="" /></span>Google Play</a> 
                                        <a className='btn text-xl font-semibold text-[#98c8f3] ' href="https://www.apple.com/app-store/" target='_blank'><span><img className='w-[30px] h-[30px]' src={appStor} alt="" /></span>App Store</a>
                                     </div>
                                   </div>


                            
                               <div className='flex justify-center items-center mt-8 '>
                                <img src={heroPng} alt="" />
                               </div>
                            
                        
             </div>
    );
};

export default Bannar;