import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Entypo, MaterialIcons, FontAwesome5, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

import HomeScreen from './views/home';
import FavoritesScreen from './views/favorites';
import PromoScreen from './views/promos';
import ProfileScreen from './views/profile';
import CartScreen from './views/cart';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon:() => (
              <Entypo name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon:() => (
              <MaterialIcons name="favorite-border" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon:() => (
              <FontAwesome5 name="shopping-bag" size={35} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Promos"
          component={PromoScreen}
          options={{
            tabBarIcon:() =>  (
              <MaterialCommunityIcons name="brightness-percent" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon:() => (
              <Ionicons name="person-sharp" size={24} color="black" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}