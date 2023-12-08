import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { fetchDataFromAPI } from '../utils/api';

const PlatformTableScreen = ({ navigation }) => {
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        fetchDataFromAPI('platforms')
            .then((response) => {
                setPlatforms(response);
            })
            .catch((error) => {
                console.error('Error al obtener datos de consolas:', error.message);
            });
    }, []);

    // Encabezado de la tabla
    const header = (
        <View style={[styles.row, styles.header]}>
            <Text style={styles.headerCell}>Consola</Text>
            <Text style={styles.headerCell}>Fecha de lanzamiento</Text>
            {/* Agrega más encabezados según sea necesario */}
        </View>
    );

    // Renderiza cada fila de la tabla
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.year}</Text>
            {/* Renderiza más datos según sea necesario */}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Cambiar el nombre de la barra de título */}
            <View style={styles.headerBody}>
                {/* Agregar el nombre deseado */}
                <Text style={styles.headerText}>Plataformas disponibles</Text>
            </View>
            <Button
                title="Regresar al menú principal"
                color="#ff0000"
                onPress={() => navigation.navigate('MainMenu')}
            />
            {/* Tabla de datos */}
            <FlatList
                ListHeaderComponent={header}
                data={platforms}
                renderItem={renderItem}
                keyExtractor={(item) => item.platform_id.toString()}
                style={styles.table}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerBody: {
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    table: {
        flex: 1,
        marginTop: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    header: {
        backgroundColor: '#f2f2f2',
    },
    headerCell: {
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
    },
});

export default PlatformTableScreen;
