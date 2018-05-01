import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import style from './style';
import flag from './../../../assets/flag.png';

export default () => {
  return (
    <View style={style.container}>
      <Image style={style.flag} source={flag} />
      <View style={style.info}>
        <Text style={style.country}>South Africa</Text>
        <Text style={style.artist}>Some Artist - With Some Song</Text>
      </View>
    </View>
  );
};
