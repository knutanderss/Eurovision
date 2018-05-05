import React, {Component} from 'react';
import {View, Text, ScrollView, StatusBar, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from './profile';
import style from './style';
import ArtistCard from './artistCard';
import * as Action from '../../actions';
import Loader from '../loader';

class Home extends Component<Prop> {
  componentWillMount () {
    this.props.requestArtists ();
    this.props.requestVoteOptions ();
  }
  static navigationOptions = {header: null};

  createArtistCard = ({item}) => {
    const artist = this.props.artists[item];
    return (
      <ArtistCard
        artist={artist}
        onPress={() =>
          this.props.navigation.navigate ('Artist', {
            country: artist.country,
          })}
      />
    );
  };

  render () {
    return (
      <View style={style.container}>
        <StatusBar style={style.statusBar} barStyle="light-content" />
        <Profile user={this.props.user} />
        {this.props.artists
          ? <FlatList
              data={Object.keys (this.props.artists)}
              keyExtractor={(item, index) => item}
              renderItem={this.createArtistCard}
            />
          : <Loader />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  artists: state.artistsReducer.artists,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators (Action, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (Home);
