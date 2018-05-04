import * as Action from '../actions/types';

const userState = {user: null, accessToken: null};

export default (state = userState, action) => {
  switch (action.type) {
    case Action.ACCESS_TOKEN_RECEIVED:
      return {
        ...state,
        accessToken: action.payload,
      };
    case Action.USER_LOGGED_OUT:
      return {
        ...state,
        user: null,
        accessToken: null,
      };
    case Action.USER_LOGGED_IN:
      console.log (action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
