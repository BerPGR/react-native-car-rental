import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import detailsStyle from '../styles/detailsStyle'
import topBrandsData from "../data/topBrandsData";
import colors from "../colors/colors";

Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont()

const Details = ({route, navigation}) => {

    const { item } = route.params
    const cars = []
    for(var i = 0; i < topBrandsData.length; i++){
        for (var j = 0; j < topBrandsData[i].cars.length; j++) {
            if(topBrandsData[i].cars[j].brand === item.brand) {
                cars.push(topBrandsData[i].cars[j])
            }
        }
    }

    return (
        <View style={detailsStyle.container}>
            <ScrollView>

            {/* Header Section */}
            <View style={detailsStyle.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.black}/>
                </TouchableOpacity>

                <Text style={detailsStyle.headerText}>{item.brand}</Text>
            </View>

            {/* Show Car Section */}
            <View style={detailsStyle.carDetailsWrapper}>
                <Text style={detailsStyle.carDetailsTitle}>All {item.brand} Cars</Text>
                {
                    cars.map(car => (
                        <TouchableOpacity key={car.id}>
                            <View style={detailsStyle.allDetailsWrapper}>
                                <View style={detailsStyle.cardLeft}>
                                    <Image source={car.image} style={detailsStyle.cardImage}/>
                                </View>

                                <View>
                                    <View>
                                        <View style={detailsStyle.cardRightTop}>
                                            <View>
                                                <Text style={detailsStyle.carTitle}>{car.brand}</Text>
                                                <Text style={detailsStyle.carSubTitle}>{car.model}</Text>
                                            </View>
                        
                                            <View style={detailsStyle.rightCardSection}>
                                                <Text style={[detailsStyle.carSubTitle, {
                                                    fontSize: 20
                                                }]}>{car.year}</Text>
                                                <Text style={[detailsStyle.carSubTitle, {
                                                    color: colors.purple, fontFamily: 'Lato-Bold'
                                                }]}>{car.condition}</Text>
                                            </View>
                                        </View>

                                        <View style={detailsStyle.cardRightBottom}>
                                            <View style={detailsStyle.carDetailsRating}>
                                                <MaterialCommunityIcons name="star" size={10} color={colors.black}/>
                                                <Text style={detailsStyle.rating}>{car.rating}</Text>
                                            </View>
                                            <View>
                                                <View style={detailsStyle.addCarButton}>
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
            </ScrollView>
        </View>
    )
}

export default Details;