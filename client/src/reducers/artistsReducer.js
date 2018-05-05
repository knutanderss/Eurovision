import * as Action from '../actions/types';

const artistsState = {artists: null, voteoptions: null};

export default (state = artistsState, action) => {
  switch (action.type) {
    case Action.ARTISTS_FETCHED:
      return {
        ...state,
        artists: action.payload,
      };
    case Action.VOTE_OPTIONS_FETCHED:
      return {
        ...state,
        voteoptions: action.payload,
      };
    default:
      return state;
  }
};
