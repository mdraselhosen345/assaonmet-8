import React, { use } from 'react';



const Card = ({filePromise}) => {
     const data = use(filePromise);
     console.log(data);
     
    return (
        <div className='mx-auto max-w-[1150px] border-2 border-red-500 h-[800px]'>
            <h1>dhfghg</h1>
        </div>
    );
};

export default Card;