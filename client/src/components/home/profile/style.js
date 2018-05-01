import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: ios ? 'American Typewriter' : 'serif',
  },
  picture: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
});
