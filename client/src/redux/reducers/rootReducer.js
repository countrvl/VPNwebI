import { combineReducers } from 'redux';
import accBlockCheckReducer from './accsReducers/accBlockCheckReducer';
import allAccsReducer from './accsReducers/allAccsReducer';

import googleAuthReducer from './googleAuthReducer';
import loaderReducer from './loaderReducer';
import allUsersReducer from './userReducers/allUsersReducer';
import userblockCheckReducer from './userReducers/userBlockCheckReducer';
import userReducer from './userReducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
  userBlkCheck: userblockCheckReducer,
  allAccs: allAccsReducer,
  accBlkCheck: accBlockCheckReducer,
  loader: loaderReducer,
  googleAuth: googleAuthReducer,
});

export default rootReducer;
