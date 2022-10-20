import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'


import colors from "../colors/colors";
import wishlistStyle from "../styles/wishlistStyle";
import typeStyle from "../styles/typeStyle";

import { carsToWishlist } from "./CarDetails";

Entypo.loadFont();

const Wishlist = ({navigation}) => {

    const Cars = () => {
        return (
            <View style={wishlistStyle.carsInWishWrapper}>
                {
                    carsToWishlist.map(car => (
                        <TouchableOpacity key={car.id}
                                onPress={() => navigation.navigate('CarDetails', {car: car})}
                            >
                                <View style={[typeStyle.allTypesWrapper, {
                                    marginBottom: 5
                                }]}>
                                    <View style={typeStyle.cardLeft}>
                                        <Image source={car.image} style={typeStyle.cardImage}/>
                                    </View>

                                    <View>
                                        <View>
                                            <View style={typeStyle.cardRightTop}>

                                                <View>
                                                    <Text style={typeStyle.carTitle}>{car.brand}</Text>
                                                    <Text style={typeStyle.carSubTitle}>{car.model}</Text>
                                                </View>
                                        
                                                <View style={typeStyle.rightCardSection}>
                                                    <Text style={[typeStyle.carSubTitle, {
                                                        fontSize: 20
                                                    }]}>{car.year}</Text>
                                                    <Text style={[typeStyle.carSubTitle, {
                                                        color: colors.purple, fontFamily: 'Lato-Bold'
                                                    }]}>{car.condition}</Text>
                                                </View>

                                            </View>

                                            <View style={typeStyle.cardRightBottom}>
                                                <View style={typeStyle.carTypeRating}>
                                                    <MaterialCommunityIcons name="star" size={10} color={colors.black}/>
                                                    <Text style={typeStyle.rating}>{car.rating}</Text>
                                                </View>
                                                <View>
                                                    <View style={typeStyle.addCarButton}>
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
        )
    }

    return (
        <View style={wishlistStyle.container}>

            <ScrollView>
            {/* Header Section */}
                <View style={wishlistStyle.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Entypo name="home" size={24} color={colors.black}/>
                    </TouchableOpacity>

                    <Text style={wishlistStyle.headerTitle}>Wishlist</Text>
                </View>

            {/* Cars in wishlist Section */}
                <Cars />
            </ScrollView>
        </View>
    )
}

export default Wishlist;