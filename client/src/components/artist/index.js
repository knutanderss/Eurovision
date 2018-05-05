import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, ScrollView, Button, StatusBar} from 'react-native';
import Country from './Country';
import VoteOption from './VoteOption';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Action from '../../actions';

class Artist extends Component<Prop> {
  static navigationOptions = {header: null, gesturesEnabled: true};

  render () {
    const country = this.props.navigation.state.params.country;
    const artist = this.props.artists[country];
    const voteOptions = this.props.voteOptions.map ((option, index) => (
      <VoteOption
        key={index}
        option={option}
        artist={artist}
        vote={this.props.vote}
        rating={artist.votes[option] || 0}
      />
    ));
    return (
      <View style={style.container}>
        <StatusBar style={style.statusBar} barStyle="light-content" />
        <View style={style.topView}>
          <Icon.Button
            style={style.backButton}
            name="ios-arrow-back"
            size={60}
            onPress={() => {
              this.props.navigation.goBack ();
            }}
          />
          <Country
            country={artist.country}
            song={artist.song}
            artist={artist.name}
            abbr={artist.abbr}
          />
        </View>
        <ScrollView>
          {voteOptions}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  voteOptions: state.artistsReducer.voteoptions,
  artists: state.artistsReducer.artists,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators (Action, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (Artist);
