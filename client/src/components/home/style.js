import {StyleSheet, Platform} from 'react-native';
import {BACKGROUND_COLOR} from '../../assets/constants';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    paddingTop: ios ? 20 : 0,
  },
  name: {
    color: '#FFF',
  },
  statusBar: {
    backgroundColor: BACKGROUND_COLOR,
  },
});
