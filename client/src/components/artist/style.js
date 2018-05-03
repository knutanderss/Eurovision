import {StyleSheet, Platform} from 'react-native';
import {BACKGROUND_COLOR} from '../../assets/constants';

const ios = Platform.OS === 'ios';

export default (styles = StyleSheet.create ({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    paddingTop: ios ? 20 : 0,
  },
  backButton: {
    backgroundColor: BACKGROUND_COLOR,
  },
  topView: {
    flexDirection: 'row',
  },
  statusBar: {
    backgroundColor: BACKGROUND_COLOR,
  },
}));
