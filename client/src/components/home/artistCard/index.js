import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import SVGImage from 'react-native-svg-image';
import * as flags from '../../../assets/flag';

const getFlag = abbr => {
  return 'https://lipis.github.io/flag-icon-css/flags/4x3/' + abbr + '.svg';
};

export default props => {
  console.log (props.artist.abbr);
  const flag = flags[props.artist.abbr];

  let info = props.artist.name + ' - ' + props.artist.song;
  info = info.length > 39 ? info.slice (0, 39) + '...' : info;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.container}>
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
    </TouchableOpacity>
  );
};
