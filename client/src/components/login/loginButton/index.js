import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginButton} from 'react-native-fbsdk';
import * as Actions from '../../../actions';

export class FBButton extends Component {
  render () {
    return (
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            alert ('Logg inn feilet: ' + result.error);
          } else if (result.isCancelled) {
            alert ('Login ble avbrutt');
          } else {
            this.props.accessTokenReceived ();
          }
        }}
        onLogoutFinished={this.props.userLoggedOut}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators (Actions, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (FBButton);
