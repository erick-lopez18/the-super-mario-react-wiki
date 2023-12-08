const API_URL = 'http://192.168.152.1:5000';

export const fetchDataFromAPI = async (id) => {
    try {
        apiUrl = `${API_URL}/characters/${id}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
        }

        const responseData = await response.json();
        console.log('Respuesta completa de la API:', responseData);

        if (response.headers.get('content-type').includes('application/json')) {
            if (responseData && Object.keys(responseData).length > 0) {
                return [responseData];
            } else {
                console.error('La respuesta de la API no tiene datos válidos.');
            }
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error.message);
        throw error;
    }
};
