import React from 'react';
import {View, Text, ScrollView, Button, StatusBar} from 'react-native';
import Country from './Country';
import VoteOption from './VoteOption';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
  return (
    <View style={style.container}>
      <StatusBar style={style.statusBar} barStyle="light-content" />
      <View style={style.topView}>
        <Icon.Button
          style={style.backButton}
          name="ios-arrow-back"
          size={60}
          onPress={() => {
            console.log (3);
          }}
        />
        <Country />
      </View>
      <ScrollView>
        <VoteOption />
        <VoteOption />
      </ScrollView>
    </View>
  );
};
