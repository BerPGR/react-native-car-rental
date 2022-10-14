import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyle from '../styles/homeStyle'

import profilePicture from '../images/profilePicture.png'

import Feather from 'react-native-vector-icons/Feather'
import colors from "../colors/colors";

import topBrandsData from '../data/topBrandsData'
import carTypesData from "../data/carTypesData";

Feather.loadFont()

const Home = ({navigation}) => {

    const renderTopBrandsItem = ({item}) => {
        return (
            <TouchableOpacity style={homeStyle.brandsTouchWrapper}
                onPress={() => navigation.navigate('Details', {
                    item: item
                })}
            >
                <ImageBackground
                    source={item.image}
                    style={homeStyle.brandItem}
                    imageStyle={homeStyle.brandItemImage}
                >
                </ImageBackground>
                <Text style={homeStyle.brandItemTitle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const renderCarTypesItem = ({item}) => {
        return (
            <TouchableOpacity style={homeStyle.activityTypeWrapper}>
                <Image source={item.image} style={homeStyle.carTypeImage}/>
                <Text style={homeStyle.carTypeTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }  

    return (
        <View style={homeStyle.container}>
            <ScrollView>

            {/* Header */}
                <SafeAreaView>
                    <View style={homeStyle.headerWrapper}>
                        <Image source={profilePicture} style={homeStyle.profile}/>
                        <View style={homeStyle.headerIcons}>
                            <Feather 
                                name="search" 
                                size={24}
                                color={colors.black}
                                style={{marginRight: 15}}/>
                            <Feather 
                                name="menu" 
                                size={24} 
                                color={colors.black}/>
                        </View>
                    </View>
                </SafeAreaView>

            {/* Top Brands of the Week */}
                <View style={homeStyle.brandsWrapper}>
                    <Text style={homeStyle.brandsTitle}>Welcome back, Benny!</Text>
                    <Text style={homeStyle.brandsSubtitle}>Here are the top 5 brands of the week</Text>
                    <View style={homeStyle.brandsDiscoverItemsWrapper}>
                        <FlatList 
                            data={topBrandsData}
                            renderItem={renderTopBrandsItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

            {/* Car Types */}
                <View style={homeStyle.carTypesWrapper}>
                   <Text style={homeStyle.carTypesTitle}>Looking for car types? Check those out!</Text>
                   <View style={homeStyle.carTypesItemsWrapper}>
                        <FlatList 
                            data={carTypesData}
                            renderItem={renderCarTypesItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                   </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;