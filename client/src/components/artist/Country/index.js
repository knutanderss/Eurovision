import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import SVGImage from 'react-native-svg-image';

const getFlag = abbr => {
  return 'https://lipis.github.io/flag-icon-css/flags/4x3/' + abbr + '.svg';
};

export default props => {
  let info = props.artist + ' - ' + props.song;
  info = info.length > 39 ? info.slice (0, 39) + '...' : info;
  return (
    <View style={style.container}>
      <View>
        <SVGImage source={{uri: getFlag (props.abbr)}} style={style.flag} />
      </View>
      <View>
        <Text style={style.country}>{props.country}</Text>
        <Text style={style.artist}>{info}</Text>
      </View>
    </View>
  );
};
