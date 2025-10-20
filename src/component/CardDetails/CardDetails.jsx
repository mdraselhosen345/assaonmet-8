import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import daowloadPng from '../../assets/dawnload.png'
import starPng from '../../assets/star.png'
import likePng from '../../assets/LikePng1.png'



const CardDetails = () => {
  const { cardId } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Filedata.json')
      .then(res => res.json())
      .then(data => {
        const foundCard = data.find(c => c.id === Number(cardId));
        if (!foundCard) {
          setError('Card not found');
        } else {
          setCard(foundCard);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, [cardId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-4">{card.description}</h1>
      <img src={card.image} alt={card.description} />
      <p>Rating: {card.ratingAvg}</p>
      <p>Downloads: {card.downloads}</p>
       */}
       <div className='mx-auto max-w-[1150px] mt-10'>

             <div className="card card-side bg-base-100 shadow-sm">
                        <figure>
                                 <img className='w-60 h-60 rounded-[10px]'
                                src={card.image}
                                alt="Movie" />
                       </figure>
                     <div className="card-body ml-10">
                             <h2 className="card-title text-2xl">{card.description}</h2>
                             <h3 className='text-lg'>{card.companyName}</h3>
                              <div className='flex gap-20'>
                                <div>
                                    <img className='h-10 w-10' src={daowloadPng} alt="" />
                                    <h4>Downloads</h4>
                                    <h2 className='text-xl'>{card.downloads}</h2>
                                </div>
                                <div>
                                    <img className='h-10 w-10'
                                    src={starPng} alt="" />
                                    <h4>Average Ratings</h4>
                                    <h2 className='text-xl'>{card.ratingAvg}</h2>
                                </div>
                                <div>
                                      <img className='h-10 w-10'
                                        src={card.likePng} alt="" />
                                      <h4>Total Reviews</h4>
                                      <h2 className='text-xl'>{card.reviews}</h2>
                                </div>
                              </div>
                           <div className="card-actions ">
                              <button className="btn btn-primary text-lg">Install Now({card.size})</button>
                           </div>
                     </div>      
              </div>

            

              <div className='mt-10'>
                <h1 className='text-2xl'>Description</h1>
                <br />
                <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                <br />
                <br />
                <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                <br />
                <br />
                <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                <br />
              </div>
       </div>
    </div>
  );
};

export default CardDetails;
