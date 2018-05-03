import React from 'react';
import {View, Text} from 'react-native';
import StarRating from 'react-native-star-rating';
import style from './style';

export default () => {
  return (
    <View style={style.container}>
      <Text style={style.voteText}>Sang</Text>
      <StarRating
        emptyStar={'md-star-outline'}
        fullStar={'md-star'}
        halfStar={'md-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={2}
        halfStarEnabled={true}
        selectedStar={rating => console.log ('Rating clicked!')}
        fullStarColor={'yellow'}
      />
    </View>
  );
};
