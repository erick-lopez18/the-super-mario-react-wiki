import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { fetchDataFromAPI } from '../utils/api';

const CharTableScreen = ({ navigation }) => {
    // Ejemplo de datos de tabla
    const chardata = [
        { key: '1', name: 'Mario', debut: 'Donkey Kong' },
        { key: '2', name: 'Luigi', debut: 'Mario Bros.' },
        { key: '3', name: 'Peach', debut: 'Super Mario Bros.' },
        { key: '4', name: 'Toad', debut: 'Super Mario Bros.' },
        { key: '5', name: 'Bowser', debut: 'Super Mario Bros.' },
        { key: '6', name: 'Donkey Kong', debut: 'Donkey Kong' },
    ];

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Hacer la solicitud a la API para obtener los personajes
        fetchDataFromAPI('characters')
          .then((response) => {
            setCharacters(response);
          })
          .catch((error) => {
            console.error('Error al obtener datos de personajes:', error.message);
          });
      }, []);


    // Tabla de contenido
    const header = (
        <View style={[styles.row, styles.header]}>
            <Text style={styles.headerCell}>Personaje</Text>
            <Text style={styles.headerCell}>Juego debut</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.debut_game}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerBody}>
                <Text style={styles.headerText}>Personajes de la franquicia</Text>
            </View>
            <Button
                title="Regresar al menú principal"
                color="#ff0000"
                onPress={() => navigation.navigate('MainMenu')}
            />
            {/* Tabla de datos */}
            <FlatList
                ListHeaderComponent={header}
                data={characters}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.table}
            />
        </View>
    );
};

export default CharTableScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    headerBody: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    table: {
        marginTop: 20,
    },
});