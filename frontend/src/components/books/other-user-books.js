import React from 'react';
import { Link } from 'react-router-dom'
import BookList from './book-list';

const OtherUserBooks = ({ books }) => books.length !== 0 && (
  <ul>
    Added By Other Users:
    <BookList books={books} />
  </ul>
)

export default OtherUserBooks;
