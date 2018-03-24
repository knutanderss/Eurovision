import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';


export default class UserProfile extends React.Component {
    render() {
        return (
            <View style={styles.profile}>
                <Image
                    style={styles.profileImage}
                    source={{
                    uri: this.props.url
                }}/>
                <Text style={styles.name}>{this.props.name}</ Text>
            </ View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    profileImage: {
        height: 90,
        borderRadius: 50,
        width: 90
    },
});