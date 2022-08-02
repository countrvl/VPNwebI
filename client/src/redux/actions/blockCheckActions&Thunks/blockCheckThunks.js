import axios from 'axios';
import * as endPoints from '../../../config/endPoints';
import { blockCheckAC } from './blockCheckActions';

export const blockCheckThunk = (id, updatedFields) => (dispatch) => {
  axios.patch(endPoints.blockUser(id), updatedFields)
    .then((response) => {
      const { status } = response.data;
      dispatch(blockCheckAC(!status));
    });
};
