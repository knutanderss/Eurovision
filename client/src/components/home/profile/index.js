import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import profilePicture from '../../../assets/profile.png';

export default props => {
  const user = props.user;
  const profilePicture = {uri: user.picture.data.url};
  return (
    <View style={style.container}>
      <Image style={style.picture} source={profilePicture} />
      <Text style={style.name}>{user.name}</Text>
    </View>
  );
};
