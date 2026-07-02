import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

import api from '../services/api';

export default function CidadeScreen() {

    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        carregarCidades();
    }, []);

    async function carregarCidades() {
        try {

            const response = await api.get('/cidade');

            setCidades(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Lista de Cidades
            </Text>

            <FlatList
                data={cidades}
                keyExtractor={(item) =>
                    String(item.codcidade)
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text>{item.cidade}</Text>
                        <Text>{item.uf}</Text>
                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8
    }
});