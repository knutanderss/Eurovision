import * as Action from '../actions/types';

const initialState = {user: null, accessToken: null};

export default (state = initialState, action) => {
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
      return {
        ...state,
        user: action.payload,
      };
    case Action.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
