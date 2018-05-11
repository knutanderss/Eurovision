import { StyleSheet, Platform } from "react-native"
import { BACKGROUND_COLOR } from "../../assets/constants"

const ios = Platform.OS === "ios"

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: ios ? 0 : 0
    },
    name: {
        color: "#FFF"
    },
    statusBar: {
        backgroundColor: "#F03278"
    }
})
