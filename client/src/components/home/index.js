import React, {Component} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from './profile';
import style from './style';
import ArtistCard from './artistCard';
import * as Action from '../../actions';

class Home extends Component<Prop> {
  componentWillMount () {
    this.props.requestArtists ();
    this.props.requestVoteOptions ();
  }
  static navigationOptions = {header: null};

  render () {
    let cards = [];
    if (this.props.artists) {
      const artList = this.props.artists;
      cards = Object.keys (artList).map (artist => (
        <ArtistCard
          key={artList[artist]._id}
          artist={artList[artist]}
          onPress={() =>
            this.props.navigation.navigate ('Artist', {
              country: artList[artist].country,
            })}
        />
      ));
    }
    return (
      <View style={style.container}>
        <StatusBar style={style.statusBar} barStyle="light-content" />
        <Profile user={this.props.user} />
        <ScrollView>
          {cards}
        </ScrollView>
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
