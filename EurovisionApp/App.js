import React, {Component} from 'react';
import {Platform, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import ListScreen from './ListScreen';

type Props = {};
export default class App extends Component < Props > {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: 'false'
    }

  }
  loggedIn = () => {
    this.setState({loggedIn: 'true'});
  }

  componentWillMount() {
    AsyncStorage
      .getItem('loggedIn')
      .then((value) => {
        console.log('VALUE IS ' + value);
        if (!value) {
          this.setState({loggedIn: 'false'});
        } else {
          this.setState({loggedIn: value});
        }
      });
  }

  render() {
    if (this.state.loggedIn === 'false') {
      return (<LoginScreen loggedIn={this.loggedIn}/>);
    } else {
      return (<ListScreen/>);
    }
  }
}
