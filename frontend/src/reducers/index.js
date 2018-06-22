import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';

const rootReducer = combineReducers({
  routing: routerReducer,
  books
});

export default rootReducer;
