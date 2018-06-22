import React, { Component } from 'react';
import UsernameGenerator from 'username-generator';
import { FormGroup, Label, Input,  Button } from 'reactstrap';
import { withRouter } from 'react-router';
import WarningModal from '../common/modal';
import { postReq, getReq } from '../../utils/request';
import { getUserName, setUserName } from '../../utils/helpers';

import './user.scss';

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      username: '',
      open: false,
      modalText: 'User with this name already Exists. Please use other username.'
    });
  }

  updateCookie = (username) => {
    setUserName(username || this.state.username)
  }

  generateUserName = () => {
    let username = getUserName();
    if (!username) {
      username = UsernameGenerator.generateUsername('-', 11);
      this.updateCookie(username);
    }

    this.setState({ username });
  }

  changeRoute = (path) => {
    this.props.history.push(path);
  }

  saveUserName = () => {
    this.updateCookie();
    postReq('/api/adduser', JSON.stringify({ data: { username: this.state.username.trim() } }))
    .then(json => {
      const { code, data } = json;

      if (code === 'ER_DUP_ENTRY') {
        // User with this already username exists show modal.
        this.setState({ open: true });
      } else if (data && data.code === 'INSERT_SUCCESS') {
        this.changeRoute('/books');
      }
    }).catch(err => {
      // display no result found for something.
    });
  }

  identifyUser = () => {
    const username = this.state.username;

    getReq(`/api/user/${username}`)
    .then(json => {
      if (json.length && json[0].username === username) {
        // user identified & move him to books page.
        this.setState({ username: username })
        this.updateCookie();
        this.changeRoute('/books')
      } else {
        // Show modal that user with the specified name cannot be identified.
        this.setState({
          open: true,
          modalText: 'User cannot be identified. Please create a new user.'
        });
      }
    })
    .catch(err => {
      // display no result found for something.
    });
  }

  componentDidMount() {
    this.generateUserName();
  }

  toggleModal = () => this.setState({ open: !this.state.open })

  render() {
    const { username, open, modalText } = this.state;
    return (
      <React.Fragment>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            name="text"
            id="username"
            onChange={({ target: { value } }) => this.setState({ username: value })}
            type='text'
            value={this.state.username} />
        </FormGroup>
        <Button color="primary" className="create-new-user-btn" onClick={this.saveUserName}>Create New User</Button>
        <Button color="primary" onClick={this.identifyUser}>Identify Old User</Button>
        <WarningModal
          open={open}
          modalText={modalText}
          modalHeader="Attention"
          cb={this.toggleModal}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(User);
