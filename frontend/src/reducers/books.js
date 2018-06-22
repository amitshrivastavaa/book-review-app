/**
 * books reducer. Not using it anywhere. This is just another approach for implementing.
 **/
import {
  BOOKS_FETCH_ALL_BOOKS
} from '../actions/books';

const defaultState = {
  books: [],
};

export default function (prevState = {
  ...defaultState
}, { type, payload }) {
  switch (type) {
    case BOOKS_FETCH_ALL_BOOKS: {
      const { books } = payload;
      return {
        ...prevState,
        books: [...books],
      }
    }

    default:
      return prevState;
  }
}
