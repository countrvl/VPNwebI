import { combineReducers } from 'redux';
import allAccsReducer from './allAccsReducer';
import allUsersReducer from './allUsersReducer';
import googleAuthReducer from './googleAuthReducer';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
  allAccs: allAccsReducer,
  loader: loaderReducer,
  googleAuth: googleAuthReducer,
});

export default rootReducer;
