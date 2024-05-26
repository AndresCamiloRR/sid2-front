import { request } from '../axios_helper';

class EmployeeService {
    findEmployee(id) {
        return request("GET", `employees/findById?id=${id}`, {})
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

export default new EmployeeService();