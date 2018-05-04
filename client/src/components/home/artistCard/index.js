import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import style from './style';
import SVGImage from 'react-native-svg-image';

const getFlag = abbr => {
  return 'https://lipis.github.io/flag-icon-css/flags/4x3/' + abbr + '.svg';
};

export default props => {
  const flag = {uri: getFlag (props.artist.abbr)};
  let info = props.artist.name + ' - ' + props.artist.song;
  info = info.length > 39 ? info.slice (0, 39) + '...' : info;
  return (
    <View style={style.container}>
      <View style={style.info}>
        <SVGImage style={style.flag} source={flag} />
      </View>
      <View style={style.info}>
        <Text style={style.country}>{props.artist.country}</Text>
        <Text style={style.artist}>
          {info}
        </Text>
      </View>
    </View>
  );
};
