import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Profile from './profile';
import style from './style';
import ArtistCard from './artistCard';

type Prop = {};

export class Home extends Component<Prop> {
  render () {
    let cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push (<ArtistCard key={i} />);
    }
    return (
      <View style={style.container}>
        <Profile />
        <ScrollView>
          {cards}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps) (Home);
