/**
 * This is just another approache to feth the data. ThunkMiddleware.
 * Not using it anywhere
 **/
import {
  BOOKS_FETCH_ALL_BOOKS,
  ADD_REVIEW_RATINGS,
} from '../actions/books';

const booksMiddleware = ({
  dispatch,
  getState
}) => (next) => async (action) => {
  if (!action) return false;
  const { type, payload } = action;
  const nextState = next(action);

  switch (type) {
    case BOOKS_FETCH_ALL_BOOKS: {
      return nextState;
    }

    case ADD_REVIEW_RATINGS: {
      return nextState;
    }

    default:
      return nextState;
  }
};

export default [booksMiddleware];
