import { GET_USER_BLKCHECK, SET_USER_BLKCHECK } from '../../types/blockCheckTypes';

export const getblockCheckAC = (payload) => ({ type: GET_USER_BLKCHECK, payload });
export const setblockCheckAC = (payload) => ({ type: SET_USER_BLKCHECK, payload });
