import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF66',
    borderRadius: 5,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  flag: {
    marginRight: 10,
    borderRadius: 3,
    width: 60,
    height: 40,
  },
  country: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: ios ? 'American Typewriter' : 'serif',
    fontWeight: 'bold',
    marginTop: -3,
  },
  artist: {
    color: '#FFFFFFAA',
    marginTop: -3,
  },
});
