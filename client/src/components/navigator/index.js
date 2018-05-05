import Home from '../home';
import Artist from '../artist';
import {StackNavigator} from 'react-navigation';
import React from 'react';

const RootStack = StackNavigator (
  {
    Home: {screen: Home},
    Artist: {screen: Artist},
  },
  {
    headerMode: 'screen',
  }
);

export default class HomeNavigation extends React.Component {
  render () {
    return <RootStack />;
  }
}
