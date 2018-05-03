import {TEST_ACTION} from './types';

export function getData () {
  return dispatch => {
    setTimeout (() => {
      dispatch ({
        type: TEST_ACTION,
        payload: 'This is some payload',
      });
    }, 500);
  };
}

export function userLoggedIn () {
  return dispatch => {
    dispatch ({
      type: 'USER_LOGGED_IN',
      payload: 'some payload',
    });
  };
}

export function userLoggedOut () {
  return dispatch => {
    dispatch ({
      type: 'USER_LOGGED_OUT',
    });
  };
}
