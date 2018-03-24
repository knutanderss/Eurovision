import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';

export default class ArtistCard extends React.Component {
    render() {
        return (
            <View style={styles.artistCard}>
                <View>
                    <TouchableOpacity onPress={this.openArtist}>
                        <Image
                            style={{
                            width: 50,
                            height: 50
                        }}
                            source={{
                            uri: this.props.image
                        }}/>
                        <Text>Artist:
                        </Text>
                        <Text>{this.props.artistName}</Text>
                        <Text>Land:
                        </Text>
                        <Text>{this.props.countryName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistCard: {
        backgroundColor: '#333333'
    }
});

