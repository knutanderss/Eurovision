import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CountryCard from './CountryCard';
import VoteOption from './VoteOption';

export default () => {
  return (
    <View>
      <CountryCard />
      <ScrollView>
        <VoteOption />
        <VoteOption />
      </ScrollView>
    </View>
  );
};
