/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  
    this.state = {
       url:"",
       name: "",
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width: 100, height: 100}}
        source={{uri: this.state.url}}
        />
        <Text style={styles.welcome}>
          Welcome {this.state.name}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <LoginButton 
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    let accessToken = data.accessToken;

                    const responseInfoCallback = (error, result) => {
                      if (error) {
                        alert("Error: " + error.toString());
                      } else {
                        this.setState({url:result.picture.data.url, name: result.name});
                        alert("Success: " + JSON.stringify(result));
                      }
                    }

                    const infoRequest = new GraphRequest(
                      '/me',
                      {
                        accessToken: accessToken,
                        parameters: {
                          fields: {
                            string: 'email,name,first_name,middle_name,last_name,picture.type(large)'
                          }
                        }
                      },
                      responseInfoCallback
                    );

                    new GraphRequestManager().addRequest(infoRequest).start()
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
