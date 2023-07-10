import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AppStack from './AppStack';

const AppTab = () => {
    const AppTabNav = createBottomTabNavigator();
  return (
    <AppTabNav.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
                iconName = focused
                ? 'planet'
                : 'planet-outline';
            } else if (route.name === 'AuthStack' ||  route.name === 'AccountStack') {
                iconName = focused 
                ? 'person-circle'
                : 'person-circle-outline';
            } else if (route.name === 'Rewards') {
                iconName = focused 
                ? 'card'
                : 'card-outline';
            } else if (route.name === 'Assignments') {
                iconName = focused 
                ? 'reader'
                : 'reader-outline';
            } else if (route.name === 'Events') {
                iconName = focused 
                ? 'calendar'
                : 'calendar-outline';
            }
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#86efac',
            tabBarInactiveTintColor: 'white',
            headerShown: false,
            tabBarStyle: {
            backgroundColor: '#1f2937',
            borderTopColor: 'transparent',
            },
            position: 'absolute',
        })}
    >   
        {/* <AppTabNav.Screen name="Home" component={AppStack} /> */}
        <AppTabNav.Screen name="Home" component={AppStack} 
            options={({ route }) => ({
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === 'SnapScreen') {
                return { display: "none" }
                } return {
                backgroundColor: '#1f2937',
                borderTopColor: 'transparent',
                }
            })(route),
            })}
        />
    </AppTabNav.Navigator>
  )
}

export default AppTab