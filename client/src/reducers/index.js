import {combineReducers} from 'redux';
import userReducer from './userReducer';
import artistsReducer from './artistsReducer';

// Combine all the reducers
const rootReducer = combineReducers ({
  userReducer,
  artistsReducer,
});

export default rootReducer;
