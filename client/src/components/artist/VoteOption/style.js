import {StyleSheet, Platform} from 'react-native';
import {TITLE_FONT} from '../../../assets/constants';

const ios = Platform.OS === 'ios';

export default StyleSheet.create ({
  container: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 15,

    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  voteText: {
    fontFamily: TITLE_FONT,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 5,
  },
});
