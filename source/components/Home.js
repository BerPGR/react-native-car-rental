import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyle from '../styles/homeStyle'

import profilePicture from '../images/profilePicture.png'

import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from "../colors/colors";

import topBrandsData from '../data/topBrandsData'
import carTypesData from "../data/carTypesData";
import rentCarData from '../data/rentCarData'

Feather.loadFont()
MaterialCommunityIcons.loadFont();
Entypo.loadFont();

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
                <Text style={homeStyle.brandItemTitle}>{item.brand}</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                            <Image source={profilePicture} style={homeStyle.profile}/>
                        </TouchableOpacity>
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

            
            {/* Rent Cars */}
                <View style={homeStyle.rentCarWrapper}>
                    <Text style={homeStyle.rentCarTitle}>Need to rent a car? Here's a few choices for you</Text>
                    {
                        rentCarData.map(item => (
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('CarsRent', {item: item})} 
                            key={item.id}>
                                <View style={[homeStyle.rentCarCardWrapper, {
                                    marginTop: item.id === 'rent-1' ? 10 : 20
                                }]}>
                                    <View style={homeStyle.cardLeft}>
                                        <Image source={item.image} style={homeStyle.cardImage}/>
                                    </View>

                                    <View>
                                        <View>
                                            <View style={homeStyle.cardRightTop}>

                                                <View>
                                                    <Text style={homeStyle.rentTitle}>{item.brand}</Text>
                                                    <Text style={homeStyle.rentSubTitle}>{item.model}</Text>
                                                </View>
                                        
                                                <View style={homeStyle.rightCardSection}>
                                                    <Text style={[homeStyle.rentSubTitle, {
                                                        fontSize: 20
                                                    }]}>{item.year}</Text>
                                                    <Text style={[homeStyle.rentSubTitle, {
                                                        color: colors.purple, fontFamily: 'Lato-Bold'
                                                    }]}>{item.condition}</Text>
                                                </View>

                                            </View>

                                            <View style={homeStyle.cardRightBottom}>
                                                <View style={homeStyle.carRentRating}>
                                                    <MaterialCommunityIcons name="star" size={10} color={colors.black}/>
                                                    <Text style={homeStyle.rating}>{item.rating}</Text>
                                                </View>
                                                <View>
                                                    <View style={homeStyle.addCarButton}>
                                                        <Feather name="plus" size={14} color={colors.white}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                {/* Made With love Section */}
                <View style={homeStyle.madeWithLoveWrapper}>
                    <Text style={homeStyle.loveText}>Made with <Entypo name="heart" size={16} color={colors.red}/> by Benny</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;