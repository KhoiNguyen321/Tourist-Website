import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DestinationsList = ({ destination }) => {
  return (
    <div className='col-3 p-15'>
      <div className='destinations__card'>
        <div className='destinations__card__img'>
          <LazyLoadImage src={destination.image} alt={destination.image} />
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;
