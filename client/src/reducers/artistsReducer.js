import * as Action from '../actions/types';

const artistsState = {artists: null, voteoptions: null};

const updateArtistsVoteAndCopy = (oldArtistList, country, option, vote) => {
  console.log ('START');
  console.log (oldArtistList);
  const artistList = oldArtistList.slice (0).map (artist => {
    if (artist.artist.country === country) {
      if (!artist.artist.votes) {
        artist.artist.votes = {};
      }
      artist.artist.votes[option] = vote;
    }
    return artist;
  });
  console.log (artistList);
  return artistList;
};

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
    case Action.USER_VOTED:
      return {
        ...state,
        artists: updateArtistsVoteAndCopy (
          state.artists,
          action.payload.country,
          action.payload.option,
          action.payload.vote
        ),
      };
    default:
      return state;
  }
};
