import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const accountStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    headerWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    headerTitle: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
    },

    photoWrapper: {
        marginTop: 40,
        alignItems: "center",
    },

    picture: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },

    profileName: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        marginTop: 15
    },

    profileAge: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        marginTop: 5
    },

    socialMediaWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: colors.purple,
        borderRadius: 35
    },

    socialMediaIcon: {
        width: 32,
        height: 32
    },

    basicInfoWrapper: {
        paddingHorizontal: 20,
        marginTop: 30
    },

    basicInfoTitleWrapper: {
        alignItems: "center"
    },

    basicInfoTitle: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
    },

    basicInfos: {
        paddingHorizontal: 20,
        marginTop: 20
    },

    basicInfoText: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginTop: 5
    },

    logOutWrapper: {
        paddingHorizontal: 20,
        marginVertical: 20,
        alignItems: "center"
    },

    logOutButton: {
        backgroundColor: colors.red,
        paddingHorizontal: 130,
        paddingVertical: 15,
        borderRadius: 20
    },

    logOutText: {
        color: colors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 18
    }
})

export default accountStyle