import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderProducts from './pages/products/headerProducts/index'
import Products from './pages/products/index';
import Cart from './pages/cart/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Products' >
          <Stack.Screen name='Products' component={Products}
            options={({ navigation }) => {
              return {
                headerTitle: () => <HeaderProducts navigation={navigation} />
              }
            }} />
          <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
