import React from "react";
import { View, Text, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyle from '../styles/homeStyle'

import profilePicture from '../images/profilePicture.png'

import Feather from 'react-native-vector-icons/Feather'
import colors from "../colors/colors";

Feather.loadFont()

const Home = () => {
    return (
        <View style={homeStyle.container}>
            <ScrollView>

            {/* Header */}
                <SafeAreaView>
                    <View style={homeStyle.headerWrapper}>
                        <Feather name="menu" size={24} color={colors.black}/>
                        <Image source={profilePicture} style={homeStyle.profile}/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Home;