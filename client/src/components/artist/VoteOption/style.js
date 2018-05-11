import { StyleSheet, Platform } from "react-native"
import { TITLE_FONT } from "../../../assets/constants"

const ios = Platform.OS === "ios"

export default StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    voteText: {
        fontFamily: "Avenir",
        color: "#000",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "800",
        marginBottom: 4
    }
})
