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
    fontSize: 25,
    fontFamily: TITLE_FONT,
    marginTop: 3,
  },
  picture: {
    width: 30,
    height: 40,
    marginRight: 20,
  },
});