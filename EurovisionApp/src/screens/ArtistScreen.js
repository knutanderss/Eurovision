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
    TouchableOpacity
} from 'react-native';
import StarRating from 'react-native-star-rating';

export default class ArtistScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 5
        }
    }

    onStarRatingPress(rating) {
        this.setState({rating: rating});
    }
    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true}/>
                <Image source={{uri: this.props.navigation.getParam('url', 'noe')}}/> 
                <Text>{this
                        .props
                        .navigation
                        .getParam('name', 'noen')}</Text>

                    <View style={{width: 60, }}>
                <StarRating
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    halfStarEnabled={true}
                    rating={this.state.rating}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={this.randomColor()}/>
                    </View>
            </View>
        );
    }
}