import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Login from '../login';
import HomeNavigation from '../navigator';
import Home from '../home';

export class Front extends Component {
  render () {
    return this.props.user ? <HomeNavigation /> : <Login />;
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  accessToken: state.userReducer.accessToken,
});

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps) (Front);
