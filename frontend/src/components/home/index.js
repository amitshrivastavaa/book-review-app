import React from 'react';
import { Jumbotron } from 'reactstrap';
import User from '../user';

const Home = () => {
  return (
    <Jumbotron>
      <h3>Welocome to Book World!!!</h3>
      <User />
    </Jumbotron>
  )
}

export default Home;
