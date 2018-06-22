import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './book-list';
import './books.scss';

const CurrentUserBook = ({ books }) => (
  <ul>
    Added By You:
    {books.length
      ? <BookList books={books}/>
      : <div>No Books Added By You. Click Add Book to add your book.</div>
    }
    <Link className="add-new-book" to="/add-book" >Add Book</Link>
  </ul>
)

export default CurrentUserBook;
