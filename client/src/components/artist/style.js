import { StyleSheet, Platform } from "react-native"
import { BACKGROUND_COLOR } from "../../assets/constants"

const ios = Platform.OS === "ios"

export default (styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: ios ? 0 : 0
    },
    topView: {
        paddingHorizontal: 32,
        paddingTop: 40,
        paddingBottom: 32
    },
    statusBar: {
        backgroundColor: BACKGROUND_COLOR
    }
}))
