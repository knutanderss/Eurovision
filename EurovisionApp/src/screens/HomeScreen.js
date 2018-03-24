import React, {Component} from 'react';

import {Platform, StyleSheet, AsyncStorage, ScrollView, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ArtistCard from '../components/ArtistCard';
import UserProfile from '../components/UserProfile';
import ArtistScreen from '../screens/ArtistScreen';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

        AsyncStorage
            .getItem('name')
            .then(name => {
                AsyncStorage
                    .getItem('pictureURL')
                    .then(url => {
                        AsyncStorage
                            .getItem('id')
                            .then(id => {
                                this.setState({name: name, url: url, id: id});
                            })
                    })
            });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <UserProfile url={this.state.url} name={this.state.name}/>
                <ArtistCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Alexander_Rybak_001.jpg/1200px-Alexander_Rybak_001.jpg"
                    artistName="Alexander Rybakk"
                    countryName="Norge"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D64541'
    }
});
