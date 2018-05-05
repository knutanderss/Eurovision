import {StyleSheet} from 'react-native';
import {TITLE_FONT} from '../../../assets/constants';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
  },
  flag: {
    height: 40,
    width: 60,
    marginRight: 10,
  },
  country: {
    fontFamily: TITLE_FONT,
    fontSize: 20,
    color: 'white',
  },
  artist: {
    marginTop: -3,
    color: 'white',
  },
  ticker: {
    height: 20,
    width: 200,
  },
});
