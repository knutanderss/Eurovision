import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    margin: 30,
  },
  voteText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 5,
  },
});
