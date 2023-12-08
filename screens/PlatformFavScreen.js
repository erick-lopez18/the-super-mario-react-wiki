import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { appStyles } from '../styles/AppStyles';

const PlatformFavScreen = ({ navigation }) => {
    // Ejemplo de datos de tabla
    const chardata = [
        { key: '1', platform: 'Nintendo Entertaiment System', launch: '15 de julio de 1983' },
        { key: '2', platform: 'Super Nintendo Entertaiment System', launch: '21 de noviembre de 1990' },
        { key: '3', platform: 'Nintendo 64', launch: '23 de junio de 1996' },
        { key: '4', platform: 'Game Boy', launch: '21 de abril de 1989' },
        { key: '5', platform: 'Game Boy Advance', launch: '11 de junio de 2001' },
        { key: '6', platform: 'Nintendo DS', launch: '21 de noviembre de 2004' },
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
            <Text style={styles.cell}>{item.platform}</Text>
            <Text style={styles.cell}>{item.launch}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Cambiar el nombre de la barra de título */}
            <View style={styles.headerBody}>
                {/* Agregar el nombre deseado */}
                <Text style={appStyles.headerText}>Plataformas favoritas</Text>
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

export default PlatformFavScreen;

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