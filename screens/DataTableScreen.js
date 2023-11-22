import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';

const DataTableScreen = ({ navigation }) => {
    // Ejemplo de datos de tabla
    const chardata = [
        { key: '1', name: 'Mario', debut: 'Donkey Kong' },
        { key: '2', name: 'Luigi', debut: 'Mario Bros.' },
        { key: '3', name: 'Peach', debut: 'Super Mario Bros.' },
        { key: '4', name: 'Toad', debut: 'Super Mario Bros.' },
        { key: '5', name: 'Bowser', debut: 'Super Mario Bros.' },
        { key: '6', name: 'Donkey Kong', debut: 'Donkey Kong' },
        // Agrega más datos según sea necesario
    ];

    // Encabezado de la tabla
    const header = (
        <View style={[styles.row, styles.header]}>
            <Text style={styles.headerCell}>Personaje</Text>
            <Text style={styles.headerCell}>Juego debut</Text>
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
                <Text style={styles.headerText}>Datos de personajes</Text>
            </View>
            <Button
                title="Regresar al menú principal"
                onPress={() => navigation.navigate('MainMenu')}
            />
            {/* Tabla de datos */}
            <FlatList
                ListHeaderComponent={header}
                data={chardata}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                style={styles.table}
            />
        </View>
    );
};

export default DataTableScreen;

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