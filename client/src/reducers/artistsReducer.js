import * as Action from '../actions/types';

const artistsState = {artists: null};

export default (state = artistsState, action) => {
  switch (action.type) {
    case Action.ARTISTS_FETCHED:
      return {
        ...state,
        artists: action.payload,
      };
    default:
      return state;
  }
};
