import React, {Component} from 'react';
import {LoginManager} from 'react-native-fbsdk';
import {
    Platform,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    View,
    Text,
    Button,
    RefreshControl,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DropdownMenu from 'react-native-dropdown-menu';
import ArtistCard from '../components/ArtistCard';
import UserProfile from '../components/UserProfile';
import ArtistScreen from '../screens/ArtistScreen';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

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

    facebookLogout() {
        LoginManager.logOut();
        AsyncStorage.removeItem('name');
        AsyncStorage.removeItem('id');
        AsyncStorage.setItem('loggedIn', 'false');


    }

    getArtistsFromServer() {
        fetch("http://172.31.98.3:3000/artists", {method: 'GET'}).then((respons) => {
            respons
                .json()
                .then((artistArr) => this.setState({items: artistArr}))
        }).catch((err) => console.log(err.message));
    }

    render() {
        var listitems = this
            .state
            .items
            .map((item) => {
                return (<ArtistCard
                    key={item._id}
                    image={item.imageURL}
                    artistName={item.name}
                    countryName={item.country}
                    number={item.number}
                    onPress={() => this.props.navigation.navigate('Artist', {name: item.name})}/>);
            });
        var data = [
            [
                "Plassering", "Score"
            ],
            ["Innstillinger", "Logg av"]
        ];

        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true}/>
                <View>
                    <Button title="Knapp" onPress={this.facebookLogout}/>
                    <UserProfile url={this.state.url} name={this.state.name}/>
                    <DropdownMenu style={{
                        flex: 1
                    }} //TODO: WHEN NO ELEMENTS IN DROPDOWNMENT, DROPDOWN MENU DISSAPEAR
                        data={data} maxHeight={410} bgColor={'#D64541'} handler={(selection, row) => this.setState({
                        items: this
                            .state
                            .items
                            .sort((a, b) => parseInt(a.number) - parseInt(b.number))
                    })}>
                        {listitems}
                    </DropdownMenu>
                </ View>

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
