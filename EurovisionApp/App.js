import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import LoginScreen from './LoginScreen';
import ListScreen from './ListScreen';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    List: {
      screen: ListScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
