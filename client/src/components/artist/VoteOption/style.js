import {StyleSheet, Platform, Dimensions} from "react-native"
import {TITLE_FONT} from "../../../assets/constants"
const {height, width} = Dimensions.get('window');

const ios = Platform.OS === "ios"
const smallScreen = width < 321;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    flexDirection: smallScreen
      ? "column"
      : "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  voteText: {
    fontFamily: "Avenir",
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "800"
  }
})
