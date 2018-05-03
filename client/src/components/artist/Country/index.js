import React from 'react';
import {View, Image, Text} from 'react-native';
import flag from '../../../assets/flag.png';
import style from './style';

export default () => {
  return (
    <View style={style.container}>
      <Image source={flag} style={style.flag} />
      <View>
        <Text style={style.country}>South Africa</Text>
        <Text style={style.artist}>Some Artist - With Some Song</Text>
      </View>
    </View>
  );
};
