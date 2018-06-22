import React from 'react';
import NewEvaluation from './new-evaluation';
import ExistingEvaluation from './existing-evaluations';

import './evaluation.scss';

const Evaluation = ({ evaluation, isbn }) => (
  <React.Fragment>
    <NewEvaluation isbn={isbn} />
    <ExistingEvaluation evaluation={evaluation} />
  </React.Fragment>
);

export default Evaluation;
