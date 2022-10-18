import { Dimensions, StyleSheet } from "react-native";
import colors from "../colors/colors";

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const carsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    imageWrapper:{
        paddingHorizontal: 20
    },

    backgroundImage: {
        height: height * 0.6,
        justifyContent: "space-between",
    },

    imageBackgroundStyle: {
        resizeMode: "contain"
    },

    backIcon: {
        marginTop: 30,
    },

    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.black,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    starWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.purple,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    infoTextWrapper: {
        marginLeft: 30,
        marginTop: 30
    },

    descriptionTitle: {
        color: colors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 34
    },

    descriptionText: {
        marginTop: 15,
        color: colors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 24
    },

    informationsWrapper: {
        paddingHorizontal: 30,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    informationsText: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Lato-Regular'
    }, 

    infoPriceWrapper: {
        paddingHorizontal: 30,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    infoItem: {
        marginTop: 5,
        flexDirection: "row",
        alignContent: "center"
    },

    infoTitle: {
        color: colors.purple,
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },

    mainInfoText: {
        color: colors.white,
        fontFamily: 'Lato-Regular',
        fontSize: 20,
    },

    InfoPriceSubtext: {
        color: colors.white,
    
    },

    buttonWrapper: {
        backgroundColor: colors.purple,
        marginTop: 15,
        paddingVertical: 15,
        marginHorizontal: 30,
        alignItems: "center",
        borderRadius: 10
    },

    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.white
    }
})

export default carsStyle