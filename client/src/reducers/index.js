import { combineReducers } from 'redux';

import { TEST_ACTION } from "../actions/types" 
console.log("IMPORTED TYPE: " + TEST_ACTION);

let dataState = { data: "" };

const dataReducer = (state = dataState, action) => {
  console.log("ACTION: " + action.type);
  switch (action.type) {
    case TEST_ACTION:
    return {
      ...state,
      data: action.payload
    }
    default:
    return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
})

export default rootReducer;