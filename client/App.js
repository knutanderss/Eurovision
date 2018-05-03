/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import Login from './src/components/login';
import Home from './src/components/home';
import Artist from './src/components/artist';
import {persistor, store} from './src/store';
import App2 from './App2';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Login />
        </PersistGate>{' '}
      </Provider>
    );
  }
}
