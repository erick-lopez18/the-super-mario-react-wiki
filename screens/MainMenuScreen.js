import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { appStyles } from '../styles/AppStyles';
import { fetchDataFromAPI } from '../utils/api';

const MainMenuScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState(null);

    const iconImages = [
        require('../assets/icon-mario.png'),
        require('../assets/icon-luigi.png'),
        require('../assets/icon-peach.png'),
        require('../assets/icon-toad.png'),
        require('../assets/icon-bowser.png'),
        require('../assets/icon-dk.png'),
    ];
    const [iconImage, setIconImage] = useState(iconImages[0]);
    
    // Monta y desmonta el componente
    useEffect(() => {
        // Obtiene los datos iniciales de la API
        fetchData();
        // Inicia la rotación de íconos
        rotateIcon();
    }, []);

    // Cambia la imagen del ícono cada vez que se enfoca el componente
    useFocusEffect(() => {
        rotateIcon();
    });

    const fetchData = async (id) => {
        try {
            const result = await fetchDataFromAPI('', id);
            setData(result);
        } catch (error) {
            console.error('Error al obtener datos:', error.message);
        }
    };

    // Función para rotar aleatoriamente entre las imágenes de icono
    const rotateIcon = () => {
        const randomIndex = Math.floor(Math.random() * iconImages.length);
        setIconImage(iconImages[randomIndex]);
    };

    // Función para manejar la búsqueda
    const handleSearch = async (text) => {
        try {
            setSearchTerm(text.trim());
            if (text.trim() !== '') {
                const results = await fetchDataFromAPI(text.trim());
                setSearchResults(results);
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error al obtener datos de búsqueda:', error.message);
            setSearchResults([]);
        }
    };

    return (
        <View style={appStyles.container}>
            <View>
                <Image source={iconImage} style={[appStyles.icon, { resizeMode: 'contain' }]} />
            </View>
            <View style={appStyles.header}>
                <Text style={appStyles.headerText}>Menú principal</Text>
            </View>
            <Button style={appStyles.button}
                title="Personajes"
                color="#ff0000"
                onPress={() => navigation.navigate('CharTable')}
            />
            <Button style={appStyles.button}
                title="Videojuegos"
                color="#ff0000"
                onPress={() => navigation.navigate('GameTable')}
            />
            <Button style={appStyles.button}
                title="Plataformas"
                color="#ff0000"
                onPress={() => navigation.navigate('PlatformTable')}
            />
            <Button style={appStyles.button}
                title="Favoritos"
                color="#ff0000"
                onPress={() => navigation.navigate('Favorites')}
            />
            <View style={appStyles.bodyText}>
                <Text style={appStyles.motd} >Mario API en React Native</Text>
                <Text style={appStyles.motd}>Hola :-)</Text>
            </View>
            <TextInput
                style={appStyles.input}
                placeholder="Buscar..."
                value={searchTerm}
                onChangeText={handleSearch}
            />

            {!!searchResults.length && (
                <FlatList
                    style={{ marginBottom: 20 }}
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={appStyles.bodyText}>
                            <Text style={{ marginBottom: 20 }}>{item.name}</Text>
                            <Image
                                style={{ width: 200, height: 400 }}
                                source={{ uri: item.image_url }}
                            />
                            {/* Renderizar otros datos relevantes aquí */}
                        </View>
                    )}
                />
            )}
            {!searchResults.length && (
                <View style={appStyles.bodyText}>
                    <Text>No hay resultados</Text>
                </View>
            )}


        </View>
    );
};

export default MainMenuScreen;
