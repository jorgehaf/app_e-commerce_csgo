import React from 'react';
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Title, Cart } from './styles';

export default function HeaderProducts({ navigation, totalItems }) {
    return (

        <Container>
            <Title>Skins</Title>
            <Cart>
                <Text>{totalItems}</Text>
                <MaterialIcons name='shopping-cart' size={28} onPress={() => navigation.navigate('Cart')} />
            </Cart>
        </Container>
    )
}