import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import * as flags from '../../../assets/flag';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextTicker from 'react-native-text-ticker';

export default props => {
  const flag = flags[props.artist.abbr];
  let info = props.artist.song;
  info = info.length > 29 ? info.slice (0, 29) + '...' : info;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.container}>
        <View style={style.artistInfo}>
          <View style={style.info}>
            <Image style={style.flag} source={flag} />
          </View>
          <View style={style.info}>
            <Text style={style.country}>{props.artist.country}</Text>
            <Text style={style.artist}>
              {info}
            </Text>
          </View>
        </View>
        <View style={style.artistState}>
          {props.isDone
            ? <Ionicons
                style={style.checkBox}
                name="ios-checkmark"
                size={40}
                color="white"
              />
            : <View />}
        </View>
      </View>
    </TouchableOpacity>
  );
};
