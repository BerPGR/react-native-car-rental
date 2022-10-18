import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import topBrandsData from "../data/topBrandsData";

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'


import colors from "../colors/colors";

import typeStyle from '../styles/typeStyle'

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

const Types = ({route, navigation}) => {

    const { item } = route.params
    const cars = []
    for(var i = 0; i < topBrandsData.length; i++){
        for (var j = 0; j < topBrandsData[i].cars.length; j++) {
            if(topBrandsData[i].cars[j].type === item.type) {
                cars.push(topBrandsData[i].cars[j])
            }
        }
    }
    
    return (
        <View style={typeStyle.container}>
            <ScrollView>

                {/* Header Section */}
                <View style={typeStyle.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={32} color={colors.black}/>
                    </TouchableOpacity>

                    <Text style={typeStyle.headerText}>{item.type}</Text>
                </View>

                {/* Show Car Section */}
                <View style={typeStyle.carTypesWrapper}>
                    <Text style={typeStyle.carTypesTitle}>All {item.type} Cars</Text>
                    {
                        cars.map(car => (
                            <TouchableOpacity key={car.id}>
                                <View style={typeStyle.allTypesWrapper}>
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
            </ScrollView>
        </View>
    )
}

export default Types;