import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { appStyles } from '../styles/AppStyles';

const CharFavScreen = ({ navigation }) => {
    // Ejemplo de datos de tabla
    const chardata = [
        { key: '1', name: 'Mario', debut: 'Donkey Kong' },
        { key: '2', name: 'Luigi', debut: 'Mario Bros.' },
        { key: '3', name: 'Peach', debut: 'Super Mario Bros.' },
        { key: '4', name: 'Toad', debut: 'Super Mario Bros.' },
        { key: '5', name: 'Bowser', debut: 'Super Mario Bros.' },
        { key: '6', name: 'Donkey Kong', debut: 'Donkey Kong' },
    ];

    // Encabezado de la tabla
    const header = (
        <View style={[styles.row, styles.header]}>
            <Text style={styles.headerCell}>Juego</Text>
            <Text style={styles.headerCell}>Fecha de lanzamiento</Text>
        </View>
    );

    // Renderiza cada fila de la tabla
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.debut}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Cambiar el nombre de la barra de título */}
            <View style={styles.headerBody}>
                {/* Agregar el nombre deseado */}
                <Text style={appStyles.headerText}>Personajes favoritos</Text>
            </View>
            <Button
                title="Regresar al menú principal"
                onPress={() => navigation.navigate('MainMenu')}
                color="#ff0000"
            />
            {/* Tabla de datos */}
            <FlatList
                ListHeaderComponent={header}
                data={chardata}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                style={appStyles.table}
            />
        </View>
    );
};

export default CharFavScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
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
        borderBottomColor: '#2c3e50',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#e0e0e0',
        borderBottomWidth: 2,
        borderBottomColor: '#2c3e50',
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