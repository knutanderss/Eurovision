import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import StarRating from 'react-native-star-rating';


export default class ArtistScreen extends React.Component {
    render() {
        return(
            <View>
                <StatusBar hidden={true} />
                <Text>{this.props.navigation.getParam('name', 'noen')}</Text>
            </View>
        );
    }
}