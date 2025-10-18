import React, { Suspense } from 'react';
import Card from '../../component/Card/Card';
import Bannar from '../../component/Bannar/Bannar';
import Titel from '../../component/Titel/Titel';
import Title2 from '../../component/Title2/Title2';

const fetchFile = async () => {
  const res = await fetch("/public/File.json");
  return res.json()
}

const Home = () => {
    const filePromise = fetchFile()

    return (
        <div>    
         <Bannar></Bannar>
         <Titel></Titel>
         <Title2></Title2>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
           <Card filePromise={filePromise}></Card>
        </Suspense>
        </div>
    );
};

export default Home;