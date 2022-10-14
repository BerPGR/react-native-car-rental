import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './source/components/Home';
import colors from './source/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Details from './source/components/Details';
import { Text, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

Entypo.loadFont();
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
        tabBarIcon: ({color}) => <Entypo name="home" size={32} color={color}/>,
      }}/>
      <Tab.Screen name="Details" component={Details} options={{
        tabBarIcon: ({color}) => <Entypo name="heart" size={32} color={color}/>,
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
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