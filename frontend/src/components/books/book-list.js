import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => books.map(({ isbn, title }) =>
  <li key={isbn}>
    <Link  to={`/book/${isbn}`}>{title}</Link>
  </li>
);

export default BookList;
