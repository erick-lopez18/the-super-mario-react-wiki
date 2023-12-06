import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { appStyles } from '../styles/AppStyles';
import { fetchDataFromAPI } from '../utils/api';

const MainMenuScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState(null);

    // Obtiene los datos de la API
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const result = await fetchDataFromAPI('yourSearchTerm');
          setData(result);
        } catch (error) {
          console.error('Error al obtener datos:', error.message);
        }
      };

      // Función para manejar la búsqueda
  const handleSearch = async () => {
    try {
      const results = await fetchDataFromAPI(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error al obtener datos de búsqueda:', error.message);
    }
  };

    return (
        <View style={appStyles.container}>
            <View style={appStyles.header}>
                <Text style={appStyles.headerText}>Menú principal</Text>
            </View>
            <TextInput
        style={appStyles.input}
        placeholder="Buscar..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button style={appStyles.button} title="Buscar" onPress={handleSearch} />

      {searchResults.length > 0 && (
        <View>
          <Text>Resultados de la búsqueda:</Text>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                {/* Puedes renderizar otros datos relevantes del resultado aquí */}
              </View>
            )}
          />
        </View>
      )}
            <Button style={appStyles.button}
                title="Personajes"
                onPress={() => navigation.navigate('CharTable')}
            />
            <Button style={appStyles.button}
                title="Videojuegos"
                onPress={() => navigation.navigate('GameTable')}
            />
            <View style={appStyles.bodyText}>
                <Text >Mario API en React Native</Text>
                <Text>Hola :-)</Text>
            </View>
        </View>
    );
};

export default MainMenuScreen;
