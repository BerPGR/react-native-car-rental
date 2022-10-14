import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    headerWrapper: {
        marginHorizontal: 20,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})


export default homeStyle;