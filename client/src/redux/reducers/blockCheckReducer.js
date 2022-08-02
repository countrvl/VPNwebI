import { SET_CHECK_BLOCK } from '../types/blockCheckTypes';

const blockCheckReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_CHECK_BLOCK:
    return payload;
  default:
    return state;
  }
};

export default blockCheckReducer;
