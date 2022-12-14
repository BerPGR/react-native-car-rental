import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from "../colors/colors";
import carDetailsStyle from "../styles/carDetailsStyle";

Entypo.loadFont()
Feather.loadFont()
MaterialCommunityIcons.loadFont()

let carsToWishlist = []

const CarDetails = ({route, navigation}) => {

    const { car } = route.params

    const addCarToWishlist = () => {
        console.log(car)
        if (carsToWishlist.length === 0) {
            carsToWishlist.push(car)
            alert('Car added to your wishlist.')
            return
        }

        let count = 0;
        for (var i = 0; i < carsToWishlist.length; i++) {
            console.log(carsToWishlist[i].id, car.id, carsToWishlist.length)
            if (carsToWishlist[i].id == car.id) {
                count++;
            }
        }

        if (count == 1) {
            alert('This car is already in your wishlist.')
            return
        }
        else {
            carsToWishlist.push(car)
            alert('Car added to your wishlist.')
            return
        }
    }

    return (
        <View style={carDetailsStyle.container}>

            {/* Image Section */}
            <View style={carDetailsStyle.imageWrapper}>
                <ImageBackground
                    source={car.image}
                    style={carDetailsStyle.backgroundImage}
                    imageStyle={carDetailsStyle.imageBackgroundStyle}
                >
                    <TouchableOpacity style={carDetailsStyle.backIcon}
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo name="chevron-left" size={32} color={colors.black}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* Description section */}
            <View style={carDetailsStyle.descriptionWrapper}>
                <TouchableOpacity style={carDetailsStyle.starWrapper}
                    onPress={addCarToWishlist}
                >
                    <Feather name="star" size={32} color={colors.white}/>
                </TouchableOpacity>

                <ScrollView>
                    <View style={carDetailsStyle.infoTextWrapper}>
                        <Text style={carDetailsStyle.descriptionTitle}>Description</Text>
                        <Text style={carDetailsStyle.descriptionText}>{car.brand} {car.model}</Text>
                    </View>

                    <View style={carDetailsStyle.informationsWrapper}>
                        <Text style={carDetailsStyle.informationsText}>{car.condition}</Text>
                    </View>

                    <View style={carDetailsStyle.infoPriceWrapper}>
                        <View>
                            <Text style={carDetailsStyle.infoTitle}>PRICE</Text>
                            <View style={carDetailsStyle.infoItem}>
                                <Text style={carDetailsStyle.mainInfoText}>
                                    ${car.price}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={carDetailsStyle.infoTitle}>RATING</Text>
                            <View style={carDetailsStyle.infoItem}>
                                <Text style={carDetailsStyle.mainInfoText}>
                                <MaterialCommunityIcons name="star" size={18} color={colors.white}/>{car.rating}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={carDetailsStyle.infoTitle}>YEAR</Text>
                            <View style={carDetailsStyle.infoItem}>
                                <Text style={carDetailsStyle.mainInfoText}>
                                    {car.year}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={carDetailsStyle.buttonWrapper}
                        onPress={() => alert('You buy a car!')}
                    >
                        <Text style={carDetailsStyle.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export { CarDetails, carsToWishlist};