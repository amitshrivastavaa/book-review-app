import React from 'react';
import RatingC from './rating';

const ExistingEvaluation = ({ evaluation }) => (
  <ul className="existing-evaluations">
    {evaluation.map(({ review, rating, username }, index) =>
      username && (
        <div className="evaluation" key={index}>
          <li>
            <h6>{username} </h6>
            <p><RatingC initialRating={rating} readonly /></p>
            <div><p>{review}</p></div>
          </li>
        </div>
      )
    )}
  </ul>
);

export default ExistingEvaluation;
