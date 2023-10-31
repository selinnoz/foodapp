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
            tabBarIcon:({focused}) => (
              <Entypo name="home" size={24} color={focused ? 'rgb(234, 32, 39)' : 'rgb(189, 189, 189)'} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon:({focused}) => (
              <MaterialIcons name="favorite-border" size={24} color={focused ? 'rgb(234, 32, 39)' : 'rgb(189, 189, 189)'} />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'rgb(234, 32, 39)', position: 'relative', top: -10, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="shopping-bag" size={25} color="white" />
              </View>
            ),
          }}
        />




        <Tab.Screen
          name="Promos"
          component={PromoScreen}
          options={{
            tabBarIcon:({focused}) =>  (
              <MaterialCommunityIcons name="brightness-percent" size={24} color={focused ? 'rgb(234, 32, 39)' : 'rgb(189, 189, 189)'} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon:({focused}) => (
              <Ionicons name="person-sharp" size={24} color={focused ? 'rgb(234, 32, 39)' : 'rgb(189, 189, 189)'} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}