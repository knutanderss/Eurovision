import { StyleSheet } from "react-native"
import { TITLE_FONT } from "../../../assets/constants"

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 32,
        marginBottom: 24
    },
    flag: {
        height: 40,
        width: 60,
        marginBottom: 16
    },
    country: {
        fontFamily: "Avenir",
        fontSize: 32,
        lineHeight: 40,
        fontWeight: "900",
        color: "#000",
        marginBottom: 8
    },
    artist: {
        fontFamily: "Avenir",
        fontWeight: "600",
        lineHeight: 20,
        fontSize: 16,
        color: "#888"
    },
    ticker: {
        width: "100%"
    }
})
