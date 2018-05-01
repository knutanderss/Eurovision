import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import Country from './Country';
import VoteOption from './VoteOption';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
  return (
    <View style={style.container}>
      <Icon.Button
        style={style.backButton}
        name="ios-arrow-back"
        size={40}
        onPress={() => {
          console.log (3);
        }}
      />

      <Country />
      <ScrollView>
        <VoteOption />
        <VoteOption />
      </ScrollView>
    </View>
  );
};
