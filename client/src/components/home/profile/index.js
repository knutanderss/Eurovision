import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import profilePicture from '../../../assets/profile.png';

export default () => {
  return (
    <View style={style.container}>
      <Image style={style.picture} source={profilePicture} />
      <Text style={style.name}>Daniel Notland</Text>
    </View>
  );
};
