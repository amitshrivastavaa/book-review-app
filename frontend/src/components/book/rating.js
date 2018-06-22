import React from 'react';
import Rating from 'react-rating';

import emptySymbol from '../../../styles/images/star-empty.png';
import fullSymbol from '../../../styles/images/star-full.png';

const RatingC = (props) => {
  return (
    <Rating
      {...props}
      emptySymbol={<img src={emptySymbol} className="icon" />}
      fullSymbol={<img src={fullSymbol} className="icon" />}
   />
  );
}

export default RatingC;
