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
import {persistor, store} from './src/store';

export default class App extends Component<$FlowFixMeProps> {
  render () {
    console.log (this.props);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
