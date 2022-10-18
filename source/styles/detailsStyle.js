import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const detailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    headerWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 32,
        fontFamily: 'Lato-Bold',
        color: colors.black
    },

    carDetailsWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },

    carDetailsTitle: {
        fontSize: 28,
        color: colors.purple,
        fontFamily: 'Lato-Bold'
    },

    allDetailsWrapper: {
        backgroundColor: colors.white,
        marginTop: 15,
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

    carTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.purple
    },

    carSubTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black
    },

    rightCardSection: {
        position: "absolute",
        marginLeft: 130,
        flexDirection: "column",
        justifyContent: "flex-end"
    },

    cardRightBottom: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 35,
        marginLeft: 10
    },

    carDetailsRating: {
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
    },
})

export default detailsStyle;