import React from 'react';
import { Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Title } from './styles';

export default function HeaderProducts({ navigation }) {
    return (
        
        <Container>
            <Title>Products</Title>
            <MaterialIcons name='shopping-cart' size={28} onPress={() => navigation.navigate('Cart')} />
        </Container>
    )
}