import { combineReducers } from 'redux';
import * as userReducer from './userReducer';

const rootReducer = combineReducers({
  ...userReducer,
});

export default rootReducer;
