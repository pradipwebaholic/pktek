import counterReducer from './counterReducer';
import usersReducer from './counterReducer';
import imageReducer from './imageReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  count: counterReducer,
  user: usersReducer,
  images: imageReducer,
});
