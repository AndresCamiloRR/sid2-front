import { request } from '../axios_helper';

class ProgramService {
    getPrograms() {
        return request("GET", `programs/all`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }
}

export default new ProgramService();