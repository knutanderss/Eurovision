import {Platform} from 'react-native';

const BACKGROUND_COLOR = '#1C2EA0';
const IOS = Platform.OS === 'ios';
const TITLE_FONT = IOS ? 'American Typewriter' : 'serif';
const SERVER_URL = 'http://localhost:3000';

export {BACKGROUND_COLOR, IOS, TITLE_FONT, SERVER_URL};
