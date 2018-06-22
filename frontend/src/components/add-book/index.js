import React from 'react';
import { Jumbotron, FormGroup, Input, Label, Button } from 'reactstrap';
import { getUserName } from '../../utils/helpers';
import { postReq } from '../../utils/request';
import WarningModal from '../common/modal';

class AddBook extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      isbn: '',
      title: '',
      open: false,
      modalText: "Please enter all required fields."
    });
  }

  toggleModal = () => this.setState({ open: !this.state.open })

  addBook = () => {

    const username = getUserName();
    const { isbn, title } = this.state;
    console.log(username);
    if (!username) {
      this.props.history.push('/');
      return;
    }

    if (!isbn || !title ) {
      this.setState({ open: true });
      return;
    }

    const body = JSON.stringify({ data: { isbn, title, username } });

    postReq('/api/addBook', body)
    .then(json => {
      const { code, data } = json;
      if (code === 'ER_DUP_ENTRY') {
        this.setState({ modalText: 'Book with this ISBN already exists.', open: true })
      } else if (data && data.code === 'INSERT_SUCCESS') {
        this.props.history.push('/books');
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { isbn, title, modalText, open } = this.state;
    return (
      <Jumbotron>
        <FormGroup>
          <Label for="book-isbn">Enter Book ISBN:</Label>
          <Input
            name="text"
            placeholder='Book ISBN'
            id="book-isbn"
            onChange={({ target: { value } }) => {
              if (value.length > 13) value = value.slice(0, 13);
              this.setState({ isbn: value });
            }}
            type='number'
            value={isbn}
          />
        </FormGroup>
        <FormGroup>
            <Label for="book-title">Enter Book Title:</Label>
            <Input
              name="text"
              placeholder='Book Title'
              id="book-title"
              onChange={({ target: { value } }) => this.setState({ title: value })}
              type='text'
              value={title}
            />
        </FormGroup>
        <Button className="add-book-button" color="primary" onClick={this.addBook}>Add Book</Button>
        <WarningModal
          open={open}
          modalText={modalText}
          modalHeader="Attention"
          cb={this.toggleModal}
        />
      </Jumbotron>
    )
  }
};

export default AddBook;
