import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import SVGImage from 'react-native-svg-image';
import * as flags from '../../../assets/flag';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextTicker from 'react-native-text-ticker';

export default props => {
  const flag = flags[props.artist.abbr];
  let info = props.artist.name + ' - ' + props.artist.song;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.container}>
        <View style={style.artistInfo}>
          <View style={style.info}>
            <Image style={style.flag} source={flag} />
          </View>
          <View style={style.info}>
            <Text style={style.country}>{props.artist.country}</Text>
            <TextTicker
              style={style.artist}
              duration={7000}
              loop
              bounce={true}
              repeatSpacer={50}
              marqueeDelay={3000}
            >
              {info}
            </TextTicker>
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
