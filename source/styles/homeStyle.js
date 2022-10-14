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
    },

    brandsWrapper: {
        marginHorizontal: 20,
        marginTop: 20
    },

    brandsTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.purple
    },

    brandsSubtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        color: colors.darkGray,
        marginTop: 14
    },

    brandsDiscoverItemsWrapper: {
        paddingVertical: 10,
    },

    brandsTouchWrapper: {
        alignItems: "center",
        marginRight: 30
    },

    brandItem: {
        width: 90,
        height: 90,
        marginTop: 15,
    },

    brandItemImage: {
        resizeMode: "contain",
    },

    brandItemTitle: {
        marginTop: 10,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    },
})  


export default homeStyle;