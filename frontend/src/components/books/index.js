import React from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getUserName, separateBooks } from '../../utils/helpers';
import { getReq } from '../../utils/request';
import CurrentUserBook from './current-user-books';
import OtherUserBooks from './other-user-books';


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      books: [],
      username: getUserName()
    })
  }

  componentDidMount() {
    getReq('/api/books')
    .then(json => this.setState({ books: json }))
    .catch(err => console.log(err));
  }

  render() {
    const { books, username } = this.state;
    const { currentUserBooks, otherUsersBooks } = separateBooks(books, username);

    return (
      <Jumbotron className="books">
        <h3>Books</h3>
        <CurrentUserBook books={currentUserBooks} />
        <OtherUserBooks books={otherUsersBooks} />
      </Jumbotron>
    );
  }
}

export default Books;
