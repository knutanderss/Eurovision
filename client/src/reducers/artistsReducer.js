import * as Action from '../actions/types';

const artistsState = {artists: null, voteoptions: null, votes: {}};

const convertArtistListToObject = artistList => {
  let artists = {};
  artistList.forEach (artist => {
    artists[artist.country] = artist;
  });
  return artists;
};

export default (state = artistsState, action) => {
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
    default:
      return state;
  }
};
