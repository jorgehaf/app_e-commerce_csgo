import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import ItemVenda from '../../components/itemVenda';
import services from "../../services/index"


import { Container } from './styles';

export default function Products() {
    const [skins, setSkins] = useState([]);

    const dispatch = useDispatch();

    async function getSkins() {
        let resp = await services.skins.getSkins();
        setSkins(resp)
        return resp;
    }

    useEffect(() => {
        getSkins();
    }, []);

    return (
        <Container>
            <View>{skins.map((army) => <ItemVenda key={army.id} army={army} />)}</View>
        </Container>
    )
}