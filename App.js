import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './source/components/Home';
import Details from './source/components/Details';
import Wishlist from './source/components/Wishlist'
import Types from './source/components/Types'

import colors from './source/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Text, View, StyleSheet } from 'react-native';
import Account from './source/components/Account';
import CarsRent from './source/components/CarsRent';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

Entypo.loadFont();
Feather.loadFont()
MaterialCommunityIcons.loadFont();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: colors.purple,
      tabBarInactiveTintColor: colors.darkGray,
      tabBarShowLabel: false,
      headerShown: false
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({color}) => <Entypo name="home" size={30} color={color}/>,
      }}/>
      <Tab.Screen name='Wishlist' component={Wishlist} options={{
        tabBarIcon: ({color}) => <Feather name='star' size={30} color={color}/>
      }}/>
      <Tab.Screen name='Account' component={Account} options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name='account' size={30} color={color}/>
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
        <Stack.Screen name='CarsRent' component={CarsRent} options={{headerShown: false}}/>
        <Stack.Screen name="Types" component={Types} options={{headerShown: false}}/>
        <Stack.Screen name="Wishlist" component={Wishlist} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})

export default App;