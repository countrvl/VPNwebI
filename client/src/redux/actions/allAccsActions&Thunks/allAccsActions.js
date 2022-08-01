/* eslint-disable import/prefer-default-export */
import { GET_ALL_ACCS } from '../../types/accountTypes';

export const getAllAccsAC = (payload) => ({ type: GET_ALL_ACCS, payload });
