import React from 'react';
import {View} from 'react-native';
import style from './style';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

export default () => {
  return (
    <View style={style.container}>
      <Bars size={30} color="#FFFFFF" />
    </View>
  );
};
