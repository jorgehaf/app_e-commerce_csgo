import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from './styles';

export default function Products({navigation}) {
    return (
        <Container>
            <Text>Produtos</Text>
            <Button title='carrinho' onPress={ () => navigation.navigate('Cart')}/>
        </Container>
    )
}