import { request } from '../axios_helper';

class AttendantsService {

    deleteAttendant(username){
        return request("DELETE", `attendants/deleteById?attendantId=${username}`, {});
    }

    createAttendant(username, name, relation, email, cityName, cityState, cityCountry) {
        return request("POST", `attendants/add`, {username:username, name:name, relation:relation, email:email, city: {name: cityName, state: cityState, country: cityCountry}, events:[]})
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

    getAttendantsFiltered(username, name, relations) {
        return request("GET", `attendants/search?userNamePattern=${username}&namePattern=${name}&relations=${relations}`, {})
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

    getAttendantsFilteredNoRelations(username, name) {
        return request("GET", `attendants/searchNoRelations?userNamePattern=${username}&namePattern=${name}`, {})
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

    getRelations() {
        return request("GET", `attendants/relations`, {})
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

export default new AttendantsService();