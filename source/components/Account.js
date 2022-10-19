import React from "react";
import { View, Text, Image, Linking, TouchableOpacity, Button } from 'react-native'
import accountStyle from "../styles/accountStyle";

import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import colors from "../colors/colors";

import profile from '../images/profilePicture.png'
import linkedIn from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import website from '../images/account.png'
import { ScrollView } from "react-native-gesture-handler";

Entypo.loadFont()
Feather.loadFont()

const Account = ({navigation}) => {
    return (
        <View style={accountStyle.container}>
            <ScrollView>
            {/* Account Header Section */}
            <View style={accountStyle.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.black}/>
                </TouchableOpacity>
                <Text style={accountStyle.headerTitle}>Account</Text>
                <Feather name="settings" size={28} color={colors.black}/>
            </View>

            {/* Photo Section */}
            <View style={accountStyle.photoWrapper}>
                <Image source={profile} style={accountStyle.picture}/>
                <Text style={accountStyle.profileName}>Bernardo de Melo Matuchewski</Text>
                <Text style={accountStyle.profileAge}>Age: 20</Text>

                <View style={accountStyle.socialMediaWrapper}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/bernardomm27/')}>
                        <Image source={linkedIn} style={accountStyle.socialMediaIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/be_polaco/')}>
                        <Image source={instagram} style={[accountStyle.socialMediaIcon, {
                            marginHorizontal: 70 
                        }]}/>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.bmatuchewski.com')}>
                        <Image source={website} style={accountStyle.socialMediaIcon}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Basic Informations Seciton */}
            <View style={accountStyle.basicInfoWrapper}>
                <View style={accountStyle.basicInfoTitleWrapper}>
                    <Text style={accountStyle.basicInfoTitle}>Info</Text>
                </View>
                
                <View style={accountStyle.basicInfos}>
                    <Text style={accountStyle.basicInfoText}>Mobile Developer</Text>
                    <Text style={accountStyle.basicInfoText}>Favourite Car: Challenger</Text>
                    <Text style={accountStyle.basicInfoText}>Favourite type of car: Muscle</Text>
                </View>
            </View>
            {/* LOG OUT SECTION */}
            <View style={accountStyle.logOutWrapper}>
                <TouchableOpacity style={accountStyle.logOutButton}
                    onPress={() => alert('You logged out.')}
                >
                    <Text style={accountStyle.logOutText}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default Account;