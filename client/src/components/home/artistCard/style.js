import {StyleSheet} from 'react-native';
import {TITLE_FONT} from '../../../assets/constants';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    width: 53,
    height: 40,
  },
  info: {},
  country: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: TITLE_FONT,
    fontWeight: 'bold',
    marginTop: -3,
  },
  artist: {
    color: '#FFFFFFAA',
  },
});
