import React from 'react';
import { Jumbotron } from 'reactstrap';
import Evaluation from './evaluation';


class Book extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;

    this.state = {
      title: '',
      isbn: id,
      evaluation: [],
    }
  }

  componentDidMount() {
    const isbn = this.state.isbn;

    fetch(`/api/book/${isbn}`)
    .then(resp => resp.json())
    .then(json => {
      if (json.length) {
        this.setState({ evaluation: json,  title: json[0].title  });
      }
    }).catch(err => {
      console.log(err);
      // display no result found for something.
    });

  }

  render() {
    const { evaluation, title, isbn } = this.state;

    return (
      <Jumbotron>
        {!title
        ? (<h2>Book not found with this isbn.</h2>)
        : (
          <React.Fragment>
            <h2>Book Title: {title}</h2>
            <h3>ISBN: {isbn}</h3>
            <Evaluation evaluation={evaluation} isbn={isbn} />
          </React.Fragment>
        )
      }
      </Jumbotron>
    );
  }

}

export default Book;
