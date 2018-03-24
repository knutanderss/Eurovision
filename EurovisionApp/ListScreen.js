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
import StarRating from 'react-native-star-rating';


export default class ListScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            starCount : 6,
        }

        AsyncStorage.getItem('name').then(name => {
            AsyncStorage.getItem('pictureURL').then(url => {
                AsyncStorage.getItem('id').then(id => {
                    this.setState({name: name, url:url, id:id});
                })
            })
        });

        
        
    }
   
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Profile url={this.state.url} name={this.state.name}/>
            </View>
        );
    }
}

class Profile extends Component<Props> {
    render() {
     return (
         <View style={styles.container}>
             <Image style={styles.profileImage} source={{uri: this.props.url}}/>
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
    profileImage: {
        height: 90,
        borderRadius: 50,
        width: 90,
      },
  });