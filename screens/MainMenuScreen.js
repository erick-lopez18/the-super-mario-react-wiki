import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Cambiar el nombre de la barra de título */}
            <View style={styles.header}>
                {/* Agregar el nombre deseado */}
                <Text style={styles.headerText}>Menú principal</Text>
            </View>
            <Button
                title="Ir a tabla de datos"
                onPress={() => navigation.navigate('DataTable')}
            />
            <View style={styles.bodyText}>
                <Text >Mario API React</Text>
                <Text>Hola :-)</Text>
            </View>

            {/*<StatusBar style="auto" />*/}
        </View>
    );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bodyText: {
        padding: 20,
        alignItems: 'center',
    }
});
