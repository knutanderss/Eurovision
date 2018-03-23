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
export default class DetailsScreen extends Component<Props> {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Profile name={this.props.navigation.getParam('name', 'Ola Nordmann')} 
                     url={this.props.navigation.getParam('url', 'http://media3.oakpark.com/Images/2/2/36431/2/1/2_2_36431_2_1_690x520.jpg')}/>
            </View>
        );
    }
}

class Profile extends Component<Props> {
    render() {
     return (
         <View style={styles.container}>
             <Image source={{uri: this.props.url}} style={{width: 50, height: 50}}/>
             <Text style={styles.name}>{this.props.name}</ Text>
             </ View>
     );   
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
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