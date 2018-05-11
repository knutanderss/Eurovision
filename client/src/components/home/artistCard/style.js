import { StyleSheet } from "react-native"
import { TITLE_FONT } from "../../../assets/constants"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 32
    },
    artistInfo: {
        alignItems: "center",
        flexDirection: "row"
    },
    artistState: {
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    flag: {
        borderRadius: 24,
        height: 72,
        width: 48
    },
    info: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        borderRadius: 24,
        height: 48,
        width: 48,
        overflow: "hidden"
    },
    country: {
        fontFamily: "Avenir",
        fontWeight: "800",
        lineHeight: 24,
        fontSize: 16,
        color: "#000"
    },
    artist: {
        fontFamily: "Avenir",
        fontWeight: "600",
        lineHeight: 20,
        fontSize: 14,
        color: "#888"
    },
    done: {
        width: 32,
        height: 32,
        backgroundColor: "#F03278",
        borderRadius: 16
    },
    totalScore: {
        fontFamily: "Avenir",
        fontWeight: "800",
        lineHeight: 32,
        fontSize: 20,
        color: "#F03278"
    }
})
