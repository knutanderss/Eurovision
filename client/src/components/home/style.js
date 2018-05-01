import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    backgroundColor: '#1C2EA0',
    flex: 1,
    paddingTop: ios ? 20 : 0,
  },
  name: {
    color: '#FFF',
  },
});
