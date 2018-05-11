import { StyleSheet } from "react-native"
import { TITLE_FONT } from "../../../assets/constants"

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
        marginBottom: 16
    },
    flag: {
        height: 48,
        width: 48
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
        height: 20,
        width: "100%"
    }
})
