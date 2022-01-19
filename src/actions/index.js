import * as actionTypes from './ActionTypes';
import { fakeApi } from '../fakeApi';
export const getPhotos =
  (len = 10) =>
  async (dispatch, getState) => {
    console.log('Getting State in Actions', getState().user);
    const response = await fakeApi.get('/photos');
    console.log('Data', response.data.slice(0, len));
    dispatch({
      type: actionTypes.GET_IMAGES,
      payload: response.data.slice(0, len),
    });
  };
