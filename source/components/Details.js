import React from "react";
import { View, Text } from 'react-native'

const Details = ({route, navigation}) => {

    const { item } = route.params
    
    return (
        <View>
            <Text>Details page</Text>
        </View>
    )
}

export default Details;