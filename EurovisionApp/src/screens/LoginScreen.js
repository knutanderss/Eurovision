import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 

type Props = {};
export default class LoginScreen extends Component<Props> {
    constructor(props) {
      super(props)
    }

    sendAccountToServer(accessToken) {
        fetch(`http://192.168.0.198:3000/api/user/${accessToken}/userinfo`, {
      method: 'GET',
    }).then(json => console.log(json.text()));
}
    
    render() {
      return (
        <View style={styles.container}>
         <StatusBar hidden={true} />
          <Text style={styles.welcome}>
            Velkommen til Eurovisionfest!
          </Text>
          <Text style={styles.instructions}>
            Du vil snart ha mulighet til å være med å stemme frem dine favoritter. Vi vil bare bli litt bedre kjent med deg først. 
            Logg på med Facebook for å komme igang!
          </Text>
          <LoginButton 
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Problemer ved innlogging, vennligst prøv igjen!");
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
                            AsyncStorage.setItem('pictureURL', result.picture.data.url);
                            AsyncStorage.setItem('name', result.name);
                            AsyncStorage.setItem('id', result.id);
                            AsyncStorage.setItem('loggedIn', 'true');
                            this.sendAccountToServer(accessToken);
                            this.props.loggedIn();
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
      backgroundColor: '#D64541',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 50,
      margin: 10,
    },
  });