import * as Action from './types';
import {
  AccessToken,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk';
import requestUserInfo from '../lib/graphApi';
import {SERVER_URL} from '../assets/constants';

export function accessTokenReceived () {
  return dispatch => {
    AccessToken.getCurrentAccessToken ().then (data => {
      dispatch ({
        type: Action.ACCESS_TOKEN_RECEIVED,
        payload: data.accessToken.toString (),
      });
      requestUserInfo (data.accessToken, dispatch);
    });
  };
}

export function userLoggedOut () {
  return dispatch => {
    dispatch ({type: Action.USER_LOGGED_OUT});
  };
}

export function requestArtists () {
  return dispatch => {
    fetch (SERVER_URL + '/artists')
      .then (result => result.json ())
      .then (result => {
        dispatch ({type: Action.ARTISTS_FETCHED, payload: result});
      })
      .catch (console.log);
  };
}

export function requestVoteOptions () {
  return dispatch => {
    fetch (SERVER_URL + '/voteoptions')
      .then (result => result.json ())
      .then (result => {
        dispatch ({
          type: Action.VOTE_OPTIONS_FETCHED,
          payload: result[0].options,
        });
      })
      .catch (console.log);
  };
}

export const vote = (userId, artist, option, rating, difference) => {
  return dispatch => {
    // Directly dispatch for quick user experience
    dispatch ({
      type: Action.USER_VOTED,
      payload: {
        country: artist.country,
        option: option,
        vote: rating,
        difference,
      },
    });

    // Forward vote to server
    fetch (SERVER_URL + '/vote', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        user: userId,
        country: artist.country,
        option,
        rating,
      }),
    });
  };
};
