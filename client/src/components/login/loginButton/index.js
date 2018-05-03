import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import * as Actions from '../../../actions';

export class FBButton extends Component {
  render () {
    return (
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            alert ('Login failed with error: ' + result.error);
          } else if (result.isCancelled) {
            alert ('Login was cancelled');
          } else {
            this.props.userLoggedIn ();
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
