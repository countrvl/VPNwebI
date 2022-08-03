import axios from 'axios';
import * as endPoints from '../../../config/endPoints';
import { getblockCheckAC, setblockCheckAC } from './blockCheckActions';

export const getblockCheckThunk = (id) => (dispatch) => {
  axios.get(endPoints.getUser(id))
    .then((response) => {
      const { status } = response.data;
      dispatch(getblockCheckAC(status));
    });
};

export const setblockCheckThunk = (id, updatedFields) => (dispatch) => {
  axios.patch(endPoints.blockUser(id), updatedFields)
    .then((response) => {
      const { status } = response.data;
      dispatch(setblockCheckAC(status));
    });
};
