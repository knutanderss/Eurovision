import * as Action from '../actions/types';

const initialState = {artists: null, voteoptions: null, votes: {}};

const convertArtistListToObject = artistList => {
  let artists = {};
  artistList.forEach (artist => {
    artists[artist.country] = artist;
  });
  return artists;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.ARTISTS_FETCHED:
      return {
        ...state,
        artists: convertArtistListToObject (action.payload),
      };
    case Action.VOTE_OPTIONS_FETCHED:
      return {
        ...state,
        voteoptions: action.payload,
      };
    case Action.USER_VOTED:
      const country = action.payload.country;
      const option = action.payload.option;
      console.log (country);
      const artist = {
        ...state.artists[country],
        votes: {
          ...state.artists[country].votes,
        },
      };
      artist.votes[option] = action.payload.vote;
      const artists = {
        ...state.artists,
      };
      artists[country] = artist;
      return {
        ...state,
        artists,
      };
    case Action.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
