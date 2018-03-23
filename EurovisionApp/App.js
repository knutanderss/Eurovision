import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; 



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
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

class HomeScreen extends React.Component {
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
                        this.props.navigation.navigate('Details')
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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
