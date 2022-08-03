import axios from 'axios';
import * as endPoints from '../../../config/endPoints';
import { getUserBlkCheckAC, setUserBlkCheckAC } from './blockCheckActions';

export const getUserBlkCheckThunk = (id) => (dispatch) => {
  axios.get(endPoints.getUser(id))
    .then((response) => {
      const { status } = response.data;
      dispatch(getUserBlkCheckAC(status));
    });
};

export const setUserBlkCheckThunk = (id, updatedFields) => (dispatch) => {
  axios.patch(endPoints.blockUser(id), updatedFields)
    .then((response) => {
      const { status } = response.data;
      dispatch(setUserBlkCheckAC(status));
    });
};
