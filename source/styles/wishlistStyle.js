import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const wishlistStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    headerWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    headerTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black
    },

    carsInWishWrapper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
})

export default wishlistStyle;