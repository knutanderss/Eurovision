import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ArtistCard extends React.Component {
    render() {
        return (
            <View style={styles.artistCard}>
                <View>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                        <Image
                            style={{
                            width: 100,
                            height: 100
                        }}
                            source={{
                            uri: this.props.image
                        }}/>
                        <View style={styles.textView}>
                        <Text>Artist:
                        </Text>
                        <Text>{this.props.artistName}</Text>
                        <Text>Land:
                        </Text>
                        <Text>{this.props.countryName}</Text>
                        <Text>Nummer:</Text>
                        <Text>{this.props.number}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textView: {
        flexDirection: 'column',
    },
    artistCard: {
        backgroundColor: 'white',
        margin: 5
    }
});
