import { request } from '../axios_helper';

class EventService {

    deleteEvent(title){
        return request("DELETE", `events/deleteByTitle?eventTitle=${title}`, {});
    }

    getByTitle(title) {
        return request("GET", `events/findByTitle?eventTitle=${title}`, {})
            .then(response => response.data) // Acceso directo a response.data
            .catch(error => {
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para manejo posterior
            });
    }
    

    getEventsFiltered(title, location, categories) {
        return request("GET", `events/search?title=${title}&location=${location}&categories=${categories}`, {})
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

    getEventsFilteredNoCategories(title, location) {
        return request("GET", `events/searchNoCategories?title=${title}&location=${location}`, {})
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

    getCategories() {
        return request("GET", `events/categories`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }

    createEvent(name, categories, date, description, locationName, address, city, state, country, faculties, programs) {
        return request("POST", "events/add", {title: name, description: description, categories: categories, date: date,
             location: {name: locationName, address: address, city: {name: city, state: state, country: country}},
            faculties: faculties, programs: programs})
    }

    addAttendants(title, attendants){
        return request("PUT", `events/addAttendants?title=${title}&attendants=${attendants}`, {})
    }
}

export default new EventService();
