import { useState } from 'react';
import { sculptureList } from './assets/data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handlePrevClick() {
    let newInd = index - 1;
    if (newInd < 0) newInd = sculptureList.length-1;
    setIndex(newInd);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
        <button onClick={handlePrevClick}>
            Previous
        </button>
        <button onClick={handleNextClick}>
            Next
        </button>
        <h2>
            <i>{sculpture.name} </i> 
            by {sculpture.artist}
        </h2>
        <h3>  
            ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <div>
            <img 
                src={sculpture.url} 
                alt={sculpture.alt}
            />
        </div>
    </>
  );
}
