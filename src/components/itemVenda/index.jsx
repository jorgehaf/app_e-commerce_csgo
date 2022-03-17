import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";

import { Container, Army } from './styles';

export default function ItemVenda(props) {
    const dispatch = useDispatch();

    return (
        <Container>
            <Army>
                <View>
                    <Text>Name: {props.army.name}</Text>
                    <Text>Stock: {props.army.stock}</Text>
                </View>
                <View>
                    <Button title='+' onPress={() => dispatch(cartActions.Add([], props.army))}/>
                </View>
            </Army>
        </Container>
    )
}