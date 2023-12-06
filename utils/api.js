import axios from 'axios';

const API_URL = 'http://192.168.43.47:8081';

export const fetchDataFromAPI = async (searchTerm) => {
    try {
        const response = await axios.get(`${API_URL}/characters/?q=${searchTerm}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error al buscar datos:', error.message);
        throw error;
    }
};
