import React, { Component } from 'react';
import {
  Platform,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: 'false',
      checkSignedIn: false,
    }
    
  }
  loggedIn = () => {
    this.setState({loggedIn: 'true'});
  }
  
  componentWillMount() {
    AsyncStorage.getItem('loggedIn').then(
    (value) => {
      console.log('VALUE IS ' + value);
      if(!value) {
        this.setState({ loggedIn: 'false', checkSignedIn: true});
      } else {
        this.setState({ loggedIn: value, checkSignedIn: true });
      }
    });
  }
  
  render() {
    if(!this.state.checkSignedIn) {
      return null;
    }
    if(this.state.loggedIn === 'false') {
     return (<LoginScreen loggedIn = {this.loggedIn}/>);
    } else {
      return (<HomeScreen />);
    }
  }
}
