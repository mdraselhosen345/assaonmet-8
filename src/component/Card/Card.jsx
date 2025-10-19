import React from 'react';
import { useEffect, useState } from 'react';
import starPng from '../../assets/star.png'
import downloadPng from '../../assets/dawnload.png'


const Card = () => {
    const [allStors, setAllStors] = useState([]);

     useEffect(() => {
         fetch("Filedata.json")
         .then(res => res.json())
         .then(data => {
          setAllStors(data)
         });
      });


    return (
        <div className='mx-auto max-w-[1150px] h-[1600px] grid grid-cols-4 '>
          {allStors.map((stors, index) => (
            <div key={index}>
                 <div className="card bg-base-100 w-65 shadow-sm gap-5 mt-5 pl-5">
                     <figure>
                       <img
                       src={stors.image}
                       alt="Shoes" />
                     </figure>
                     <div className="card-body">
                             <h3 className='text-xl'>{stors.description}</h3>
                        <div className="card-actions flex justify-between">
                              <button>
                                <img className='h-[20px] w-[20 px]' src={starPng} alt="" />{stors.ratingAvg}</button>
                              <button><img className='h-[20px] w-[20 px]' src={downloadPng} alt="" />{stors.downloads}</button>
                              
                        </div>
                     </div>
                  </div>
            </div>
          ))
            
          }
        </div>
    );
};

export default Card; 