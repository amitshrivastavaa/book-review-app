// actions. Not using it anywhere in the project. But this is another approach for implementing it. 
export const BOOKS_FETCH_ALL_BOOKS = '@@books/FETCH_ALL_BOOKS';
export const BOOKS_ADD_REVIEW_RATINGS = '@@books/ADD_REVIEW_RATINGS';

export const addReviewRatings = (review, rating) => ({
  type: ADD_REVIEW_RATINGS,
  payload: {
    review,
    rating
  }
});

export const fetchAllBooks = () => ({
  type: FETCH_ALL_BOOKS,
});
