import { combineReducers } from 'redux';
import googleAuthReducer from './googleAuthReducer';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // allUsers: allUsersReducer,
  loader: loaderReducer,
  googleAuth: googleAuthReducer,
});

export default rootReducer;
