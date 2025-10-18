import React from 'react';

const Titel = () => {
    return (
        <div className='h-[350px] bg-[#9F62F2]'>
             <h1 className='pt-[70px] text-center font-bold text-5xl'>Trusted by Millions, Built for You</h1>


              <div className='flex align-center justify-center gap-35 pt-12 '>
                  <div className='text-center'>
                       <p>Total Downloads</p>
                       <h1 className='text-6xl font-bold pt-3 pb-3'>29.6M</h1>
                       <p>21% more than last month</p>
                     </div>
             <div className='text-center'>
                    <p>Total Reviews</p>
                    <h1 className='text-6xl font-bold pt-3 pb-3'>906K</h1>
                    <p>46% more than last month</p>
             </div>
             <div className='text-center'>
                   <p>Active Apps</p>
                   <h1 className='text-6xl font-bold pt-3 pb-3'>132+</h1>
                   <p>31 more will Launch</p>
             </div>
              </div>
        </div>
    );
};

export default Titel;