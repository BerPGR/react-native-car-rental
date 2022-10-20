import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from "../colors/colors";
import carsStyle from "../styles/carsStyle";

Entypo.loadFont()
Feather.loadFont()
MaterialCommunityIcons.loadFont()

const CarsRent = ({route, navigation}) => {

    const { item } = route.params
    
    return (
        <View style={carsStyle.container}>

            {/* Image Section */}
            <View style={carsStyle.imageWrapper}>
                <ImageBackground
                    source={item.image}
                    style={carsStyle.backgroundImage}
                    imageStyle={carsStyle.imageBackgroundStyle}
                >
                    <TouchableOpacity style={carsStyle.backIcon}
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo name="chevron-left" size={32} color={colors.black}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* Description section */}
            <View style={carsStyle.descriptionWrapper}>
                <ScrollView>
                    <View style={carsStyle.infoTextWrapper}>
                        <Text style={carsStyle.descriptionTitle}>Description</Text>
                        <Text style={carsStyle.descriptionText}>{item.brand} {item.model}</Text>
                    </View>

                    <View style={carsStyle.informationsWrapper}>
                        <Text style={carsStyle.informationsText}>{item.condition}</Text>
                    </View>

                    <View style={carsStyle.infoPriceWrapper}>
                        <View>
                            <Text style={carsStyle.infoTitle}>$ P/ DAY</Text>
                            <View style={carsStyle.infoItem}>
                                <Text style={carsStyle.mainInfoText}>
                                    ${item.pricePerDay}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={carsStyle.infoTitle}>RATING</Text>
                            <View style={carsStyle.infoItem}>
                                <Text style={carsStyle.mainInfoText}>
                                <MaterialCommunityIcons name="star" size={18} color={colors.white}/>{item.rating}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={carsStyle.infoTitle}>YEAR</Text>
                            <View style={carsStyle.infoItem}>
                                <Text style={carsStyle.mainInfoText}>
                                    {item.year}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={carsStyle.buttonWrapper}
                        onPress={() => alert('You rent a car!')}
                    >
                        <Text style={carsStyle.buttonText}>Rent Now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default CarsRent;