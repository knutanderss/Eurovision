import { Platform } from "react-native"

export const BACKGROUND_COLOR = "blue"
export const IOS = Platform.OS === "ios"
export const TITLE_FONT = IOS ? "Avenir" : "Helvetica"
export const SERVER_URL = "http://eurovisionapp.herokuapp.com"
// export const SERVER_URL = 'http://localhost:3000';
export const COLOR_SCALE = [
    "#FF0000",
    "#FF3400",
    "#FF6900",
    "#FF9E00",
    "#FFD300",
    "#F7FF00",
    "#C2FF00",
    "#8DFF00",
    "#58FF00",
    "#00FF00"
]
