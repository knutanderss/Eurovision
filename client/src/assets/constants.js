import {Platform} from 'react-native';

export const BACKGROUND_COLOR = '#1C2EA0';
export const IOS = Platform.OS === 'ios';
export const TITLE_FONT = IOS ? 'American Typewriter' : 'serif';
//export const SERVER_URL = 'http://eurovisionapp.herokuapp.com';
export const SERVER_URL = 'http://localhost:3000';
