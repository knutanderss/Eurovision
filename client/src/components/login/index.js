import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Button} from 'react-native';
import FBButton from './loginButton';

import * as Actions from '../../actions';
import style from './style';

export class Login extends Component<{}> {
  render () {
    console.log (this.props);
    return (
      <View style={style.container}>
        <Text style={style.loginText}>Login Page</Text>
        <FBButton />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log (state);
  return {
    counter: state.dataReducer.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators (Actions, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (Login);
