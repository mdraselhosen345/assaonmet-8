import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
       <div className='mx-auto max-w-[1150px] h-[300px] border-2 border-red-500'>
             
       </div>
    </div>
  );
};

export default CardDetails;
