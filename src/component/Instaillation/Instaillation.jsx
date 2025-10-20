import React from 'react';
import starPng from '../../assets/star.png'
import downloadPng from '../../assets/dawnload.png'
import demo1Png from '../../assets/demo-app (1).webp'

const Instaillation = () => {

    return (
        <div className='mx-auto max-w-[1150px] mb-15'>

            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold pt-4'>Your Installed Apps</h1>
                <p className='pt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div>
                <div className='grid md:grid-cols-2 justify-between text-center gap-80 mt-15'>
                    <h1 className='text-2xl font-bold'>1 Apps Found</h1>
                     <h2>Sort By Size</h2>
                </div>
                <div>
                     <div className="mx-auto max-w-[850px] card card-side">
                        <figure>
                            <img className='w-20 h-20 rounded-[5px]'
                            src={demo1Png}
                             alt="" />
                       </figure>
                              <div className="card-body">
                                              <h2 className="pt-1 text-lg">Forest: Focus for Productivity</h2>
                                                 <div className='flex justify-between gap-5 mr-37 relative'>
                                                     <h3><img className='h-[14px] w-[14px]' src={starPng} alt="" />4.5</h3>
                                                     <h3><img className='h-[14px] w-[14px] mr-120' src={downloadPng} alt="" />2500</h3> 
                                                 </div>
                                           <div className="card-actions justify-end items-center absolute buttom-20 left-180 top-12">
                                                 <button className="btn btn-primary">Uninstall</button>
                                           </div>
                              </div>
                   </div>
                     <div className="mx-auto max-w-[850px] card card-side">
                        <figure>
                            <img className='w-20 h-20 rounded-[5px]'
                            src={demo1Png}
                             alt="" />
                       </figure>
                              <div className="card-body">
                                              <h2 className="pt-1 text-lg">Forest: Focus for Productivity</h2>
                                                 <div className='flex justify-between gap-5 mr-37 relative'>
                                                     <h3><img className='h-[14px] w-[14px]' src={starPng} alt="" />4.5</h3>
                                                     <h3><img className='h-[14px] w-[14px] mr-120' src={downloadPng} alt="" />2500</h3> 
                                                 </div>
                                           <div className="card-actions justify-end items-center absolute buttom-20 left-180 top-12">
                                                 <button className="btn btn-primary">Uninstall</button>
                                           </div>
                              </div>
                   </div>
                     <div className="mx-auto max-w-[850px] card card-side">
                        <figure>
                            <img className='w-20 h-20 rounded-[5px]'
                            src={demo1Png}
                             alt="" />
                       </figure>
                              <div className="card-body">
                                              <h2 className="pt-1 text-lg">Forest: Focus for Productivity</h2>
                                                 <div className='flex justify-between gap-5 mr-37 relative'>
                                                     <h3><img className='h-[14px] w-[14px]' src={starPng} alt="" />4.5</h3>
                                                     <h3><img className='h-[14px] w-[14px] mr-120' src={downloadPng} alt="" />2500</h3> 
                                                 </div>
                                           <div className="card-actions justify-end items-center absolute buttom-20 left-180 top-12">
                                                 <button className="btn btn-primary">Uninstall</button>
                                           </div>
                              </div>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Instaillation;