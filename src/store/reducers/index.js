/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const reducers = combineReducers({
  books: bookReducer
});

export default (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined
  }
  return reducers(state, action)
}
