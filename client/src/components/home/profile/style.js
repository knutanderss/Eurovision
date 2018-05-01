import {StyleSheet, Platform} from 'react-native';
import {TITLE_FONT} from '../../../assets/constants';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontFamily: TITLE_FONT,
  },
  picture: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
});
