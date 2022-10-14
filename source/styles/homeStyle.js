import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    headerWrapper: {
        paddingHorizontal: 20,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    headerIcons: {
        flexDirection: "row",
    },

    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    brandsWrapper: {
        paddingHorizontal: 20,
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
        color: colors.black,
        marginTop: 14
    },

    /* Brand Discover Style */
    brandsDiscoverItemsWrapper: {
        paddingVertical: 5,
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
        color: colors.black
    },

    /* Car type Style */
    carTypesWrapper: {
        marginHorizontal: 20,
        marginTop: 40
    },

    carTypesTitle: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        color: colors.purple,
        width: '80%'
    },

    carTypesItemsWrapper: {
        paddingVertical: 10
    },

    activityTypeWrapper: {
        alignItems: "center",
        marginRight: 23,
    },

    carTypeImage: {
        width: 60,
        height: 60
    },

    carTypeTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.black
    },

    /* Rent car style */
    rentCarWrapper: {
        paddingHorizontal: 20,
        marginTop: 40
    },

    rentCarTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.purple,
        width: '85%'
    },

    rentCarCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingLeft: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3
    },
    
    cardLeft: {
        alignItems: "center",
        flexDirection: "column"
    },

    cardImage: {
        width: 130,
        height: 140,
        resizeMode: "contain",
    },

    cardRightTop: {
        marginLeft: 10,
        marginTop: 15,
        flexDirection: "row",
    },

    rentTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.purple
    },

    rightCardSection: {
        position: "absolute",
        marginLeft: 130,
        flexDirection: "column",
        justifyContent: "flex-end"
    },

    rentSubTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black
    },

    cardRightBottom: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 35,
        marginLeft: 10
    },

    carRentRating: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    rating: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.black,
        marginLeft: 5,
        marginRight: 80
    },

    addCarButton: {
        backgroundColor: colors.purple,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25
    }
})  


export default homeStyle;