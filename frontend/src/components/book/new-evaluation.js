import React from 'react';
import { Jumbotron, Button, FormGroup,  Label, Input } from 'reactstrap';
import { withRouter } from 'react-router';
import WarningModal from '../common/modal';
import { getUserName } from '../../utils/helpers';
import { postReq } from '../../utils/request';
import RatingC from './rating';

class NewEvaluation extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: 0,
      open: false
    };
  }

  toggleModal = () => this.setState({ open: !this.state.open })

  addEvaluation = () => {
    const username = getUserName();
    const { history, isbn } = this.props;
    const { rating, review } = this.state;

    if (!username) {
      history.push('/');
      return;
    }

    if (!rating || !review) {
      this.toggleModal();
      return;
    };

    postReq(`/api/book/${isbn}`, JSON.stringify({ data: { isbn, username, rating, review } }))
    .then(json => {
      const { data } = json;
      if (data && data.code === 'INSERT_SUCCESS') {
        history.push('/books');
      }
    }).catch(err => {
      console.log(err);
      // display no result found for something.
    });
  }

  render() {

    const { review, rating, open } = this.state;
    return (
      <div className="new-evaluation">
        <FormGroup>
          <Label for="review">Review:</Label>
          <Input
            type="textarea"
            name="text"
            id="review"
            value={review}
            onChange={({ target: { value }}) => this.setState({ review: value })}
          />
        </FormGroup>
        <div className="new-ratings">
          <span className="heading">Rating:</span>
          <RatingC
            onChange={(val) => this.setState({ rating: val })}
            initialRating={rating}
          />
          </div>
        <Button color="primary" onClick={this.addEvaluation} >Add Evaluation</Button>
        <WarningModal
          open={open}
          modalText="Please fill the requested fields."
          modalHeader="Attention"
          cb={this.toggleModal}
        />
      </div>
    );
  }
}

export default withRouter(NewEvaluation);
