import { StyleSheet, Platform } from "react-native"
import { TITLE_FONT } from "../../../assets/constants"

const ios = Platform.OS === "ios"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 40,
        paddingBottom: 24,
        paddingHorizontal: 32,
        backgroundColor: "#F03278",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    name: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Avenir",
        fontWeight: "800"
    },
    picture: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 16
    }
})
