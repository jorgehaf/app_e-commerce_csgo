import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";

import { Container, Army, InfosArmy, DetailsArmy } from './styles';

export default function ItemVenda(props) {
    const dispatch = useDispatch();

    return (
        <Container>
            <Army>
                <DetailsArmy>
                    <Image style={{ width: 80, height: 80 }} source={{ uri: props.army.image }} />
                    <InfosArmy>
                        <Text>Price: {`$${props.army.price}`}</Text>
                        <Text>Name: {props.army.name}</Text>
                        <Text>Stock: {props.army.stock}</Text>
                    </InfosArmy>
                </DetailsArmy>
                <View>
                    <Button title='+' onPress={() => dispatch(cartActions.Add([], props.army))} />
                </View>
            </Army>
        </Container>
    )
}