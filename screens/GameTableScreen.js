import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { appStyles } from '../styles/AppStyles';

const CharTableScreen = ({ navigation }) => {
    // Ejemplo de datos de tabla
    const chardata = [
        { key: '1', game: 'Donkey Kong', launch: '9 de julio de 1981' },
        { key: '2', game: 'Mario Bros.', launch: '14 de julio de 1983.' },
        { key: '3', game: 'Super Mario Bros.', launch: '14 de julio de 1983' },
        { key: '4', game: 'Super Mario Bros. 2', launch: '9 de octubre de 1988' },
        { key: '5', game: 'Super Mario Bros. 3', launch: '23 de octubre de 1988' },
        { key: '6', game: 'Super Mario World', launch: '21 de noviembre de 1990' },
        // Agrega más datos según sea necesario
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
            <Text style={styles.cell}>{item.game}</Text>
            <Text style={styles.cell}>{item.launch}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Button style={appStyles.button}
                title="Regresar al menú principal"
                color="#ff0000"
                onPress={() => navigation.navigate('MainMenu')}
            />
            {/* Cambiar el nombre de la barra de título */}
            <View style={styles.headerBody}>
                {/* Agregar el nombre deseado */}
                <Text style={appStyles.headerText}>Videojuegos publicados</Text>
            </View>
            
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