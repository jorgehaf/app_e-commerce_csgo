import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HeaderProducts from './pages/products/headerProducts/index'
import Products from './pages/products/index';
import Cart from './pages/cart/index';

const Stack = createNativeStackNavigator();

export default function App2() {
    const CartItems = useSelector(state => state)

    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Products' >
                    <Stack.Screen name='Products' component={Products}
                        options={({ navigation }) => {
                            return {
                                headerTitle: () => <HeaderProducts navigation={navigation} totalItems={CartItems.cart.totalItems} />,
                            }
                        }} />{ }
                    <Stack.Screen name='Cart' component={Cart} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
