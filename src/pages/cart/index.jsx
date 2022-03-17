import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Army, Buttons, Container } from './styles';

export default function Cart() {
    const dispatch = useDispatch();

    const CartItems = useSelector(state => state)
    console.log(CartItems.cart)

    return (
        <Container>
            <View>
                {CartItems.cart.Cart.map((army) =>
                    <Army key={army.id}>
                        <View>
                            <Text>Name: {army.name}</Text>
                            <Text>Amount: {army.amount}</Text>
                        </View>
                        <Buttons>
                            <Button title='+' onPress={() => dispatch(cartActions.AddItem([], army))}/>
                            <Button title='-' onPress={() => dispatch(cartActions.RemoveItem([], army))}/>
                            <Button title='Delete' onPress={() => dispatch(cartActions.DeleteItem([], army))}/>
                        </Buttons>
                    </Army>
                )}
            </View>
        </Container>
    )
}