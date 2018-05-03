import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Home from './src/components/home';
import Login from './src/components/login';

export class App2 extends Component {
  render () {
    return this.props.loggedIn ? <Home /> : <Login />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.dataReducer.loggedIn,
});

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps) (App2);
