import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {LOGIN_ERROR, USER_LOGGED_IN} from '../actions/types';

export default (accessToken, dispatch) => {
  const infoRequest = new GraphRequest (
    '/me',
    {
      accessToken: accessToken,
      parameters: {
        fields: {
          string: 'email,name,first_name,middle_name,last_name,picture.height(480)',
        },
      },
    },
    (err, result) => {
      if (err) {
        console.log ('Error: ' + err);
        dispatch ({
          type: LOGIN_ERROR,
          payload: err,
        });
      } else {
        dispatch ({
          type: USER_LOGGED_IN,
          payload: result,
        });
      }
    }
  );
  // Start the graph request.
  new GraphRequestManager ().addRequest (infoRequest).start ();
};
