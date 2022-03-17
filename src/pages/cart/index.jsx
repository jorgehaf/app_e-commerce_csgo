import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import { Text, View, Button, Image } from 'react-native';
import { Army, Buttons, Container, DetailsArmy, InfosArmy } from './styles';

export default function Cart() {
    const dispatch = useDispatch();

    const CartItems = useSelector(state => state)

    return (
        <Container>
            <View>
                <Text>{CartItems.cart.totalItems} products added:</Text>
                {CartItems.cart.Cart.map((army) =>
                    <Army key={army.id}>
                        <DetailsArmy>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: army.image }} />
                            <InfosArmy>
                                <Text>Price: {`$${army.totalGunPrice}`}</Text>
                                <Text>Name: {army.name}</Text>
                                <Text>Amount: {army.amount}</Text>
                            </InfosArmy>
                        </DetailsArmy>
                        <Buttons>
                            <Button title='+' onPress={() => dispatch(cartActions.AddItem([], army))} />
                            <Button title='-' onPress={() => dispatch(cartActions.RemoveItem([], army))} />
                            <Button title='Delete' onPress={() => dispatch(cartActions.DeleteItem([], army))} />
                        </Buttons>
                    </Army>
                )}
            </View>
        </Container>
    )
}