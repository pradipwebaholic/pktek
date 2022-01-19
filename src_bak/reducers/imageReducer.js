import axios from 'axios';

import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  loading: true,
  images: [],
};

/*const reducer = (state = initialState, action) => {
  const stateClone = {...state};
  switch(action.type) {
    case actionTypes.GET_IMAGES: stateClone.counter++; break;
    break;
  }
  console.log('stateClone.loading: ' + stateClone.loading);
  return stateClone;
};

export default reducer;*/
const imageReducer = (state = initialState, { type, payload }) => {
  console.log('state in reducer', state);
  switch (type) {
    case actionTypes.GET_IMAGES:
      return {
        ...state,
        images: payload,
      };

    default:
      return state;
  }
};

export default imageReducer;
