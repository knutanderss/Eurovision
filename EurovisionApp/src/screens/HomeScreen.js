import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ArtistCard from '../components/ArtistCard';
import UserProfile from '../components/UserProfile';
import ArtistScreen from '../screens/ArtistScreen';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: []}

        this.getArtistsFromServer();
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

    getArtistsFromServer() {
        fetch("http://192.168.0.176:3000/artists", {
          method: 'GET'
        }).then((respons) => {respons.json().then((artistArr) => this.setState({items: artistArr}))})
        .catch((err) => console.log(err.message));
      }

    render() {
        var listitems = this.state.items.map((item) => {
            return (
              <ArtistCard key={item._id} image={item.imageURL} artistName={item.name} countryName={item.country} onPress={() => this.props.navigation.navigate('Artist', {name: item.name})}  />
            );
          });
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true}/>
                <UserProfile url={this.state.url} name={this.state.name}/>
                {listitems}
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

export default StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({header: null})
    },
    Artist: {
        screen: ArtistScreen
    }
}, {
    initialRouteName: 'Home'
},);
