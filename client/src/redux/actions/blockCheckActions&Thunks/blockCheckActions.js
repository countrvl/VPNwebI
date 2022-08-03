import { GET_USER_BLKCHECK, SET_USER_BLKCHECK } from '../../types/blockCheckTypes';

export const getUserBlkCheckAC = (payload) => ({ type: GET_USER_BLKCHECK, payload });
export const setUserBlkCheckAC = (payload) => ({ type: SET_USER_BLKCHECK, payload });
