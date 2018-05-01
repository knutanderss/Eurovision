import React from 'react';
import {View, Image, Text} from 'react-native';
import flag from '../../../assets/flag.png';

export default () => {
  return (
    <View>
      <Image source={flag} />
      <View>
        <Text>South Africa</Text>
        <Text>Some Artist - With Some Song</Text>
      </View>
    </View>
  );
};
